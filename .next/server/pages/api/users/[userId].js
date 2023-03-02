"use strict";
(() => {
var exports = {};
exports.id = 582;
exports.ids = [582];
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

/***/ 9656:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _mongoose = __webpack_require__(1185);
const userSchema = new _mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "snapify/defaults/blank-avatar_v0t9d1"
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
});
const User = _mongoose.models.User || (0, _mongoose.model)("User", userSchema);
module.exports = User;


/***/ }),

/***/ 2311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _database_models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9656);
/* harmony import */ var _database_models_user__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_database_models_user__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1832);


async function handler(req, res) {
    const { userId  } = req.query;
    await (0,_database_dbConnect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    if (req.method === "GET") {
        try {
            let user = await _database_models_user__WEBPACK_IMPORTED_MODULE_0___default().findOne({
                _id: userId
            });
            const { password , ...rest } = user._doc;
            res.json({
                success: true,
                message: "",
                user: rest
            });
        } catch (error) {
            console.error(error.message);
            return res.json({
                success: false,
                message: `Error: ${error.message}`
            });
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2311));
module.exports = __webpack_exports__;

})();