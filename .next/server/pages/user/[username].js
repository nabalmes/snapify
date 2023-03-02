"use strict";
(() => {
var exports = {};
exports.id = 293;
exports.ids = [293,748];
exports.modules = {

/***/ 9283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Alert)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
;// CONCATENATED MODULE: ./components/Alert.jsx



function Alert({ type , message , className  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center justify-center gap-3 bg-white py-12 " + className,
        children: [
            type === "unFound" ? /*#__PURE__*/ jsx_runtime_.jsx(md_.MdSearchOff, {
                className: "text-gray-500 text-4xl"
            }) : type === "noFollowing" ? /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiUserUnfollowLine, {
                className: "text-gray-500 text-4xl"
            }) : null,
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-sm md:text-base text-gray-900 font-semibold tracking-tight ",
                children: message
            })
        ]
    });
}


/***/ }),

/***/ 2692:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _mongoose = __webpack_require__(1185);
const postSchema = new _mongoose.Schema({
    authorId: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    topics: {
        type: Array
    },
    content: {
        caption: {
            type: String
        },
        images: {
            type: Array,
            required: true
        }
    },
    likes: {
        type: Array,
        default: []
    },
    comments: [
        {
            commenterId: {
                type: _mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, {
    timestamps: true
});
const Post = _mongoose.models.Post || (0, _mongoose.model)("Post", postSchema);
module.exports = Post;


/***/ }),

/***/ 1235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_tfi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1740);
/* harmony import */ var react_icons_tfi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_tfi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1336);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_auth_nextauth___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2535);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _database_dbConnect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3984);
/* harmony import */ var _database_models_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1696);
/* harmony import */ var _database_models_user__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_database_models_user__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _database_models_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2692);
/* harmony import */ var _database_models_post__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_database_models_post__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_getImageUrl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5149);
/* harmony import */ var _components_StickyBlock_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5459);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9283);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_MainLayout__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_12__]);
([_components_MainLayout__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















async function getServerSideProps(context) {
    try {
        const { req , res , query  } = context;
        let session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_7__.unstable_getServerSession)(req, res, _api_auth_nextauth___WEBPACK_IMPORTED_MODULE_6__/* .authOptions */ .L);
        let user = null;
        await (0,_database_dbConnect__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
        if (session) {
            user = await _database_models_user__WEBPACK_IMPORTED_MODULE_9___default().findOne({
                _id: session._id
            });
        }
        // find user base on the query username value
        const authorRes = await _database_models_user__WEBPACK_IMPORTED_MODULE_9___default().findOne({
            username: query.username
        });
        //redirects to 404 page if the user not found
        if (!authorRes) {
            return {
                notFound: true
            };
        }
        // fetch all user's posts
        const posts = await _database_models_post__WEBPACK_IMPORTED_MODULE_10___default().find({
            authorId: authorRes._id
        });
        // combined all the gathered data
        const author = {
            ...authorRes._doc,
            posts
        };
        author.password = undefined;
        return {
            props: JSON.parse(JSON.stringify({
                user,
                author
            }))
        };
    } catch (error) {
        console.error(error);
    }
}
const Profile = ({ user , author  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const { username , followers , following , image , posts , _id: authorId  } = author;
    const [isFollowedBtn, setIsFollowedBtn] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false);
    // check if user has followed the author
    const checkFollow = (follower = user)=>{
        const isFollowed = follower.following.some((user)=>user === authorId);
        setIsFollowedBtn(isFollowed);
    };
    // initial check
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        if (user) {
            checkFollow();
        }
    }, [
        authorId,
        user?.following
    ]);
    // handle follow click that fetches and do the rechecking
    const handleFollow = async ()=>{
        if (!user) {
            router.push("/signin");
            return;
        }
        setLoading(true);
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_12__["default"].put(`/api/users?type=follow&authorId=${authorId}`);
            setLoading(false);
            checkFollow(response.data.user);
        } catch (error) {
            console.error(error.message);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StickyBlock_jsx__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "min-h-[700px] p-7 bg-white shadow-sm rounded-lg",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-start gap-4 mb-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[60px] rounded-full overflow-hidden aspect-square",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    src: _utils_getImageUrl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z + image,
                                    alt: "avatar",
                                    width: "60",
                                    height: "60",
                                    className: "w-full h-full object-cover"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "font-bold md:text-lg",
                                        children: username
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center gap-3 flex-wrap text-gray-600 text-sm md:text-[15px]",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    followers.length,
                                                    " followers"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    following.length,
                                                    " following"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            user?._id !== author._id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                className: `${loading ? "text-gray-400 bg-gray-100" : "text-blue-600 bg-blue-600/[.10] hover:bg-blue-600/[.15]"} flex items-center gap-2 text-sm rounded-lg py-2 px-6 ml-auto font-medium`,
                                onClick: handleFollow,
                                disabled: loading,
                                children: [
                                    "Follow",
                                    isFollowedBtn && "ed"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: "grid grid-cols-2 gap-2 relative",
                        children: posts.length !== 0 ? posts.map((post)=>{
                            const { _id , content , likes , comments  } = post;
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: `/search?value=${_id}`,
                                className: "relative isolate aspect-square overflow-hidden rounded-md",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        src: _utils_getImageUrl__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z + content.images[0],
                                        width: "150",
                                        height: "150",
                                        className: "w-full h-full object-cover",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute inset-0 bg-black/[.25] hover:opacity-100 opacity-0 transition-opacity z-10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex text-gray-300 items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineHeart, {
                                                            className: "text-xl"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: likes.length
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tfi__WEBPACK_IMPORTED_MODULE_3__.TfiComment, {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: comments.length
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }, _id);
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Alert__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            message: "This user haven't post anything yet",
                            className: "absolute left-1/2 -translate-x-1/2 text-center"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

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

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 1111:
/***/ ((module) => {

module.exports = require("react-icons/hi");

/***/ }),

/***/ 4751:
/***/ ((module) => {

module.exports = require("react-icons/io");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 1740:
/***/ ((module) => {

module.exports = require("react-icons/tfi");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,999,163], () => (__webpack_exec__(1235)));
module.exports = __webpack_exports__;

})();