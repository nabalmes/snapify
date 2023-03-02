"use strict";
exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 7050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input),
/* harmony export */   "U": () => (/* binding */ InputField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function InputField(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-1 mb-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: props.id,
                className: "text-sm font-semibold",
                children: props.label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Input, {
                ...props
            })
        ]
    });
}
function Input(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        ...props,
        className: "border text-sm text-gray-600 bg-gray-50 shadow-sm border-gray-300 px-6 py-2 rounded-md focus:ring-1 focus:ring-blue-600 transition-all outline-none"
    });
}


/***/ }),

/***/ 6898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3227);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2535);


const userSession = async ({ req , res  })=>{
    try {
        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.unstable_getServerSession)(req, res, _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__/* .authOptions */ .L);
        return JSON.parse(JSON.stringify(session));
    } catch (error) {
        console.error(error);
        return null;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSession);


/***/ })

};
;