"use strict";
exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 3765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AuthLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/logo.svg
var logo = __webpack_require__(3300);
;// CONCATENATED MODULE: ./assets/background.jpg
/* harmony default export */ const background = ({"src":"/_next/static/media/background.70607f17.jpg","height":2000,"width":3000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKAJ/8QAGhAAAgIDAAAAAAAAAAAAAAAAAgMEEQABgv/aAAgBAQABPwAGMj7iGLCtsey6z//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECAQE/AI//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/AuthLayout.jsx





function AuthLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "min-h-screen flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "md:mx-[5%] mx-auto w-[90%] max-w-[400px] md:min-w-[320px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: logo/* default */.Z,
                            alt: "",
                            className: "mb-16 mt-8",
                            priority: true
                        })
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grow hidden md:block",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: background,
                    alt: "",
                    className: "w-full h-full object-cover"
                })
            })
        ]
    });
} // polish more and final designs


/***/ })

};
;