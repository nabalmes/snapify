"use strict";
(() => {
var exports = {};
exports.id = 593;
exports.ids = [593,748];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 3518:
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 2113:
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 5719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./database/models/post.js
var post = __webpack_require__(7143);
var post_default = /*#__PURE__*/__webpack_require__.n(post);
// EXTERNAL MODULE: ./database/models/user.js
var models_user = __webpack_require__(9656);
var user_default = /*#__PURE__*/__webpack_require__.n(models_user);
// EXTERNAL MODULE: ./database/dbConnect.js
var dbConnect = __webpack_require__(1832);
// EXTERNAL MODULE: external "next-auth"
var external_next_auth_ = __webpack_require__(3227);
// EXTERNAL MODULE: ./pages/api/auth/[...nextauth].js
var _nextauth_ = __webpack_require__(870);
// EXTERNAL MODULE: external "cloudinary"
var external_cloudinary_ = __webpack_require__(3518);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
;// CONCATENATED MODULE: ./utils/fetchPosts.js
const fetchPosts = async (arr, User)=>{
    return await Promise.all(arr.map(async (post)=>{
        const author = await User.findOne({
            _id: post.authorId
        });
        author.password = undefined;
        const comments = await Promise.all(post.comments.map(async (comment)=>{
            const commenter = await User.findOne({
                _id: comment.commenterId
            });
            commenter.password = undefined;
            return {
                ...comment._doc,
                commenter
            };
        }));
        const sortedComments = comments.sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt));
        return {
            ...post._doc,
            author,
            comments: sortedComments
        };
    }));
};
/* harmony default export */ const utils_fetchPosts = (fetchPosts);

;// CONCATENATED MODULE: ./pages/api/post/index.js








// cloudinary config for uploading & deleting a post
external_cloudinary_.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
// default is 1mb, changed to 100 to avoid request errors
const config = {
    api: {
        bodyParser: {
            sizeLimit: "100mb"
        }
    }
};
async function handler(req, res) {
    const session = await (0,external_next_auth_.unstable_getServerSession)(req, res, _nextauth_.authOptions);
    await (0,dbConnect/* default */.Z)();
    switch(req.method){
        case "GET":
            const { feed , value: search  } = req.query;
            const page = req.query.page || 1;
            const noSkip = req.query.noSkip || false;
            const limit = 4;
            const index = (page - 1) * limit;
            let posts = [];
            let users = [];
            try {
                if (search) {
                    if (search.match(/^[0-9a-fA-F]{24}$/)) {
                        let postRes;
                        if (noSkip) {
                            postRes = await post_default().find({
                                _id: search
                            }).sort({
                                createdAt: -1
                            }).limit((page - 1) * limit);
                        } else {
                            postRes = await post_default().find({
                                _id: search
                            }).sort({
                                createdAt: -1
                            }).skip(index).limit(limit);
                        }
                        posts = await utils_fetchPosts(postRes, (user_default()));
                    } else {
                        users = await user_default().find({
                            username: search
                        });
                        let postsRes;
                        if (noSkip) {
                            postsRes = await post_default().find({
                                topics: {
                                    $in: search
                                }
                            }).sort({
                                createdAt: -1
                            }).limit((page - 1) * limit);
                        } else {
                            postsRes = await post_default().find({
                                topics: {
                                    $in: search
                                }
                            }).sort({
                                createdAt: -1
                            }).skip(index).limit(limit);
                        }
                        posts = await utils_fetchPosts(postsRes, (user_default()));
                    }
                } else if (feed) {
                    if (feed === "foryou") {
                        let filtered;
                        if (noSkip) {
                            filtered = await post_default().find().sort({
                                createdAt: -1
                            }).limit((page - 1) * limit);
                        } else {
                            filtered = await post_default().find().sort({
                                createdAt: -1
                            }).skip(index).limit(limit);
                        }
                        posts = await utils_fetchPosts(filtered, (user_default()));
                    }
                    if (feed === "following") {
                        if (!session) {
                            return {
                                redirect: {
                                    destination: "/signin",
                                    permanent: false
                                }
                            };
                        }
                        const user = await user_default().findOne({
                            _id: session._id
                        });
                        let filtered1;
                        if (noSkip) {
                            filtered1 = await post_default().find({
                                authorId: {
                                    $in: user.following
                                }
                            }).sort({
                                createdAt: -1
                            }).limit((page - 1) * limit);
                        } else {
                            filtered1 = await post_default().find({
                                authorId: {
                                    $in: user.following
                                }
                            }).sort({
                                createdAt: -1
                            }).skip(index).limit(limit);
                        }
                        posts = await utils_fetchPosts(filtered1, (user_default()));
                    }
                }
                res.json({
                    success: true,
                    message: "",
                    posts,
                    users
                });
            } catch (error) {
                console.error(error);
                res.json({
                    success: false,
                    message: "",
                    posts: [],
                    users: []
                });
            }
            break;
        case "POST":
            try {
                const { topics , caption , images  } = req.body;
                // upload to cloudinary
                const uploadedImages = await Promise.all(images.map(async (image)=>{
                    const result = await external_cloudinary_.v2.uploader.upload(image, {
                        folder: "snapify/posts",
                        upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET
                    });
                    return result.public_id;
                }));
                // store to database
                const data = {
                    authorId: session._id,
                    topics,
                    content: {
                        caption,
                        images: uploadedImages
                    }
                };
                const createdPost = await post_default().create(data);
                res.json({
                    success: true,
                    message: "Your snap has been posted",
                    post: createdPost
                });
            } catch (error1) {
                console.error(error1);
                res.json({
                    success: false,
                    message: `Error: ${error1.message}`
                });
            }
            break;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [870,143], () => (__webpack_exec__(5719)));
module.exports = __webpack_exports__;

})();