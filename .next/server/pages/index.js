"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,748];
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

/***/ 7019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FeedBtns)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



function FeedBtns() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const isDefaultRoute = router.asPath === "/" || router.asPath === "/?feed=foryou";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: "bg-white sticky z-20 top-[20px] md:top-8 inset-y-0 flex items-center justify-center gap-6 border-b border-b-gray-300",
            children: [
                "foryou",
                "following"
            ].map((feed)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/?feed=${feed}`,
                    className: `${feed == "foryou" ? isDefaultRoute && "border-b-[3px] border-b-blue-600" : !isDefaultRoute && "border-b-[3px] border-b-blue-600"} font-bold text-sm md:text-[15px] py-4 basis-1/5 text-center hover:text-blue-600 transition-colors`,
                    children: feed == "foryou" ? "For you" : "Following"
                }, feed);
            })
        })
    });
}


/***/ }),

/***/ 8618:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FeedBtns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7019);
/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1336);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5775);
/* harmony import */ var _api_auth_nextauth___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2535);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
/* harmony import */ var _getApiUrl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9996);
/* harmony import */ var _utils_encodeUrl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6118);
/* harmony import */ var _hooks_useScroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9029);
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9283);
/* harmony import */ var _components_StickyBlock_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5459);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_MainLayout__WEBPACK_IMPORTED_MODULE_2__, _components_Post__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_6__, _hooks_useScroll__WEBPACK_IMPORTED_MODULE_7__]);
([_components_MainLayout__WEBPACK_IMPORTED_MODULE_2__, _components_Post__WEBPACK_IMPORTED_MODULE_3__, axios__WEBPACK_IMPORTED_MODULE_6__, _hooks_useScroll__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













async function getServerSideProps(context) {
    try {
        const { req , res , query: query1  } = context;
        const { feed  } = query1;
        const baseUrl = "/api/post";
        let response = null;
        // defaults to foryou feed
        if (!feed) {
            return {
                redirect: {
                    destination: "/?feed=foryou",
                    permanent: false
                }
            };
        }
        // fetch posts according to provided queries
        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_5__.unstable_getServerSession)(req, res, _api_auth_nextauth___WEBPACK_IMPORTED_MODULE_4__/* .authOptions */ .L);
        const options = {
            withCredentials: true,
            headers: {
                Cookie: req.headers.cookie
            }
        };
        // unsigned user cannot go to protected routes
        if (feed === "following" && !session) {
            return {
                redirect: {
                    destination: "/signin",
                    permanent: false
                }
            };
        }
        if (feed) {
            const url = (0,_utils_encodeUrl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(`${(0,_getApiUrl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)() + baseUrl}`, {
                feed
            });
            response = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].get(url, options);
        }
        return {
            props: JSON.parse(JSON.stringify({
                data: session,
                initialPosts: response.data.posts,
                query: query1
            }))
        };
    } catch (error) {
        console.error(error);
        return {
            props: JSON.parse(JSON.stringify({
                data: {},
                initialPosts: [],
                query
            }))
        };
    }
}
function Home({ data: session , initialPosts , query: query1  }) {
    const { baseUrl , page , posts , setPosts , hasMore  } = (0,_hooks_useScroll__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(initialPosts, query1);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MainLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Homepage"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_StickyBlock_jsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FeedBtns__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            posts.length === 0 && query1.feed === "following" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Alert__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                type: "noFollowing",
                message: "You haven't followed anyone yet"
            }),
            posts.length === 0 && query1.feed === "foryou" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Alert__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                type: "empty",
                message: "No posts yet"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "flex flex-col gap-8 bg-white shadow-sm",
                children: posts.length !== 0 && posts.map((post)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        session: session,
                        post: post,
                        actions: {
                            baseUrl,
                            query: query1,
                            page
                        },
                        setPosts: setPosts
                    }, post._id);
                })
            }),
            hasMore && posts.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center justify-center pt-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "spinner w-[25px] h-[25px] border-[3.8px] border-gray-400"
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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

/***/ 3789:
/***/ ((module) => {

module.exports = require("react-swipeable");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,999,163,743], () => (__webpack_exec__(8618)));
module.exports = __webpack_exports__;

})();