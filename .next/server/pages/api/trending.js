"use strict";
(() => {
var exports = {};
exports.id = 452;
exports.ids = [452];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const dbConnect = async ()=>{
    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);
    console.log("Connected to database");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);


/***/ }),

/***/ 635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database_models_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7143);
/* harmony import */ var _database_models_post__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_database_models_post__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1832);


async function handler(req, res) {
    try {
        await (0,_database_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
        const posts = await _database_models_post__WEBPACK_IMPORTED_MODULE_0___default().find();
        // get the top three most used topics
        const topics = posts.map((post)=>post.topics).flat();
        const trending = Object.entries(topics.reduce((acc, topic)=>{
            acc[topic] = (acc[topic] || 0) + 1;
            return acc;
        }, {})).sort((a, b)=>b[1] - a[1]).slice(0, 3).map(([name, quantity])=>({
                name,
                quantity
            }));
        res.json(trending);
    } catch (error) {
        console.error(error);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [143], () => (__webpack_exec__(635)));
module.exports = __webpack_exports__;

})();