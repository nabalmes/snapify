"use strict";
(() => {
var exports = {};
exports.id = 424;
exports.ids = [424,748];
exports.modules = {

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

/***/ 9701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database_models_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7143);
/* harmony import */ var _database_models_post__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_database_models_post__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1832);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(870);




async function handler(req, res) {
    await (0,_database_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { postId , type  } = req.query;
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.unstable_getServerSession)(req, res, _auth_nextauth___WEBPACK_IMPORTED_MODULE_3__.authOptions);
    const post = await _database_models_post__WEBPACK_IMPORTED_MODULE_0___default().findOne({
        _id: postId
    });
    switch(req.method){
        case "PUT":
            try {
                if (type === "like") {
                    const isLiked = post.likes.some((id)=>id === session._id);
                    if (isLiked) {
                        const newLikes = post.likes.filter((like)=>like !== session._id);
                        post.likes = newLikes;
                        const savedPost = await post.save();
                        res.json({
                            success: false,
                            message: "Unlike",
                            post: savedPost
                        });
                    } else {
                        const temp = [
                            ...post.likes
                        ];
                        temp.push(session._id);
                        post.likes = temp;
                        const savedPost1 = await post.save();
                        res.json({
                            success: true,
                            message: "Liked",
                            post: savedPost1
                        });
                    }
                } else if (type === "comment") {
                    const { comment  } = req.body;
                    const temp1 = [
                        ...post.comments
                    ];
                    temp1.push({
                        commenterId: session._id,
                        comment
                    });
                    post.comments = temp1;
                    const savedComment = await post.save();
                    res.json({
                        success: true,
                        message: "Comment",
                        comment: savedComment
                    });
                }
            } catch (error) {
                console.error(error);
            }
            break;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [870,143], () => (__webpack_exec__(9701)));
module.exports = __webpack_exports__;

})();