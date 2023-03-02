"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829,748];
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

/***/ 1236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./database/models/user.js
var models_user = __webpack_require__(9656);
var user_default = /*#__PURE__*/__webpack_require__.n(models_user);
// EXTERNAL MODULE: ./database/dbConnect.js
var dbConnect = __webpack_require__(1832);
// EXTERNAL MODULE: external "next-auth"
var external_next_auth_ = __webpack_require__(3227);
// EXTERNAL MODULE: ./pages/api/auth/[...nextauth].js
var _nextauth_ = __webpack_require__(870);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(7096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
// EXTERNAL MODULE: external "cloudinary"
var external_cloudinary_ = __webpack_require__(3518);
;// CONCATENATED MODULE: ./utils/updateUser.js





// cloudinary config for uploading & deleting a post
external_cloudinary_.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const updateUser = async (req, res)=>{
    const { type  } = req.query;
    const session = await (0,external_next_auth_.unstable_getServerSession)(req, res, _nextauth_.authOptions);
    let user = await user_default().findOne({
        _id: session._id
    });
    switch(type){
        case "info":
            // change password
            if (req.body?.newPassword) {
                const { currentPassword , newPassword , confirmPassword  } = req.body;
                // password validations
                if (newPassword !== confirmPassword) {
                    res.json({
                        success: false,
                        message: "Password did not match"
                    });
                    return;
                }
                const match = external_bcrypt_default().compareSync(currentPassword, user.password);
                if (!match) {
                    res.json({
                        success: false,
                        message: "Password incorrect"
                    });
                    return;
                }
                // hash password before storing to database
                const hash = external_bcrypt_default().hashSync(newPassword, 10);
                user.password = hash;
            }
            // change username
            if (req.body?.username) {
                const { username  } = req.body;
                const usernameExist = await user_default().findOne({
                    username
                });
                if (usernameExist) {
                    return res.json({
                        success: false,
                        message: "Username is already exist"
                    });
                }
                user.username = username;
            }
            // change contact
            if (req.body?.contact) {
                const { contact  } = req.body;
                const contactExist = await user_default().findOne({
                    contact
                });
                if (contactExist) {
                    return res.json({
                        success: false,
                        message: "Contact is already exist"
                    });
                }
                user.contact = contact;
            }
            // change profile picture
            if (req.body?.image) {
                const { image  } = req.body;
                // delete the previous image first in the cloudinary
                let deleteRes = {};
                if (session.image.split("/")[1] !== "defaults") {
                    deleteRes = await external_cloudinary_.v2.uploader.destroy(session.image);
                }
                // upload the image to cloudinary
                const uploadRes = await external_cloudinary_.v2.uploader.upload(image, {
                    folder: "snapify/users",
                    upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET
                });
                // set the new image
                user.image = uploadRes.public_id;
            }
            break;
        case "follow":
            const { authorId  } = req.query;
            const { following  } = user;
            const author = await user_default().findOne({
                _id: authorId
            });
            const isFollowed = following.some((user)=>user === authorId);
            let userFollowing = [
                ...following
            ];
            let authorFollowers = [
                ...author.followers
            ];
            // if followed, un-follow and vice versa
            if (isFollowed) {
                userFollowing = following.filter((user)=>user !== authorId);
                authorFollowers = author.followers.filter((user)=>user !== session._id);
            } else {
                userFollowing.push(authorId);
                authorFollowers.push(session._id);
            }
            // finally save author ad user
            user.following = userFollowing;
            author.followers = authorFollowers;
            await author.save();
            break;
    }
    const updatedUser = await user.save();
    res.json({
        success: true,
        message: "Account updated",
        user: updatedUser
    });
};
/* harmony default export */ const utils_updateUser = (updateUser);

// EXTERNAL MODULE: ./database/models/post.js
var post = __webpack_require__(7143);
var post_default = /*#__PURE__*/__webpack_require__.n(post);
;// CONCATENATED MODULE: ./utils/deleteUser.js





// cloudinary config for uploading & deleting a post
external_cloudinary_.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const deleteUser = async (req, res)=>{
    try {
        const session = await (0,external_next_auth_.unstable_getServerSession)(req, res, _nextauth_.authOptions);
        // find user's collections
        const [user, posts] = await Promise.all([
            user_default().findOne({
                _id: session._id
            }),
            post_default().find({
                authorId: session._id
            })
        ]);
        // remove user image in cloudinary
        let userImage = null;
        if (user.image.split("/")[1] !== "defaults") {
            userImage = await external_cloudinary_.v2.uploader.destroy(user.image);
        }
        // remove user posts images in cloudinary
        const postsRes = posts.length > 0 ? await Promise.all(posts.map(async (post)=>{
            const images = post.content.images;
            return images.length > 0 ? await Promise.all(images.map(async (image)=>{
                if (image.split("/")[1] !== "defaults") {
                    const response = await external_cloudinary_.v2.uploader.destroy(image);
                    return response;
                }
            })) : [];
        })) : [];
        // delete user, user posts & user comments
        const postsCommented = await post_default().find({
            "comments.commenterId": session._id
        });
        const removedUser = await user_default().deleteOne({
            _id: session._id
        });
        const removedPosts = await post_default().deleteMany({
            authorId: session._id
        });
        const removedComments = postsCommented.length > 0 ? await Promise.all(postsCommented.map(async (post)=>{
            if (post.comments.length > 0) {
                const filtered = post.comments.filter((comment)=>{
                    return comment.commenterId.toString() !== session._id;
                });
                post.comments = [
                    ...filtered
                ];
                return await post.save();
            }
        })) : [];
        res.json({
            success: true,
            message: "Account deleted",
            result: {
                userAssets: userImage,
                postsAssets: postsRes.flat(),
                removedUser,
                removedPosts,
                removedComments
            }
        });
    } catch (error) {
        console.error(error.message);
        res.json({
            success: false,
            message: "There's something wrong"
        });
    }
};
/* harmony default export */ const utils_deleteUser = (deleteUser);

;// CONCATENATED MODULE: ./pages/api/users/index.js





// default is 1mb, changed to 100 to avoid request errors
const config = {
    api: {
        bodyParser: {
            sizeLimit: "100mb"
        }
    }
};
async function handler(req, res) {
    await (0,dbConnect/* default */.Z)();
    try {
        switch(req.method){
            case "POST":
                const { contact , username , password , confirmPassword  } = req.body;
                // validate passwords
                if (password !== confirmPassword) {
                    res.json({
                        success: false,
                        message: "Password didn't match"
                    });
                    return;
                }
                // unique credentials check
                const contactExist = await user_default().findOne({
                    contact
                });
                if (contactExist) {
                    return res.json({
                        success: false,
                        message: "Contact is already exist"
                    });
                }
                const usernameExist = await user_default().findOne({
                    username
                });
                if (usernameExist) {
                    return res.json({
                        success: false,
                        message: "Username is already exist"
                    });
                }
                // hash password & register the user
                const hash = external_bcrypt_default().hashSync(password, 10);
                await user_default().create({
                    contact,
                    username,
                    password: hash
                });
                res.json({
                    success: true,
                    message: "Account registered"
                });
                break;
            case "PUT":
                await utils_updateUser(req, res);
                break;
            case "DELETE":
                await utils_deleteUser(req, res);
                break;
        }
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: `Error: ${error.message}`
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [870,143], () => (__webpack_exec__(1236)));
module.exports = __webpack_exports__;

})();