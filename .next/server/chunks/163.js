"use strict";
exports.id = 163;
exports.ids = [163];
exports.modules = {

/***/ 8471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ImageInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);




function ImageInput({ index , image , handleRemoveImage  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-[60px] aspect-square rounded-lg overflow-hidden border border-gray-300 relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                onClick: ()=>handleRemoveImage(index),
                className: "opacity-0 hover:opacity-100 transition-opacity absolute inset-0 flex bg-black/[.25]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoMdClose, {
                    className: "text-white m-auto text-2xl"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: URL.createObjectURL(image),
                alt: image.name,
                width: "60",
                height: "60",
                className: "h-full w-full object-contain"
            })
        ]
    }, index);
}


/***/ }),

/***/ 1336:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(492);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MainMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8204);
/* harmony import */ var _NewSnap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1328);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6201);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NewSnap__WEBPACK_IMPORTED_MODULE_5__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, axios__WEBPACK_IMPORTED_MODULE_7__]);
([_NewSnap__WEBPACK_IMPORTED_MODULE_5__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__, axios__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function MainLayout({ children  }) {
    const [displayMenu, setDisplayMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [displayNew, setDisplayNew] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [trending, setTrending] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // hot topics
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getTrending = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_7__["default"].get("/api/trending");
                setTrending(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getTrending();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen grid md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2fr_1fr] items-start w-[95%] relative max-w-[1100px] mx-auto gap-12",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.Toaster, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: "rounded-full fixed md:hidden bg-blue-600 text-white flex items-center justify-center p-3 aspect-square bottom-8 right-8 z-40 outline-none focus:ring hover:bg-blue-700 active:bg-blue-600 shadow-lg",
                onClick: ()=>setDisplayMenu(!displayMenu),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__.HiMenuAlt2, {
                    className: "text-2xl"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NewSnap__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: displayNew ? "flex" : "hidden",
                setDisplayNew: setDisplayNew
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainMenu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "hidden md:flex sticky top-8 h-[80vh] overflow-auto",
                setDisplayNew: setDisplayNew,
                trending: trending,
                setDisplayMenu: setDisplayMenu
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MainMenu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: `${displayMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}  bg-white p-7 transition-opacity md:hidden fixed z-30 left-1/2 top-4 bottom-4 overflow-auto -translate-x-1/2 w-[90%] shadow-2xl rounded-lg`,
                setDisplayNew: setDisplayNew,
                trending: trending,
                setDisplayMenu: setDisplayMenu
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "w-full rounded-lg mb-12",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                className: "hidden lg:hidden xl:flex flex-col gap-4 sticky top-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Search__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    className: "hidden lg:block",
                    trending: trending,
                    setDisplayMenu: setDisplayMenu
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/hi"
var hi_ = __webpack_require__(1111);
// EXTERNAL MODULE: ./public/logo.svg
var logo = __webpack_require__(3300);
// EXTERNAL MODULE: ./components/Search.jsx
var Search = __webpack_require__(492);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: ./components/MenuLinks.jsx





function MenuLinks({ session  }) {
    const style = {
        link: "group flex items-center gap-2",
        icon: "text-xl text-gray-400 transition-colors group-hover:text-blue-600",
        text: "text-gray-600 transition-colors group-hover:text-blue-600 font-medium text-sm md:text-[15px]"
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: "flex flex-col items-start gap-2",
        children: session ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: `/user/${session.username}`,
                        className: style.link,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineUser, {
                                className: style.icon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: style.text,
                                children: "Profile"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/settings",
                        className: style.link,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsGear, {
                                className: style.icon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: style.text,
                                children: "Settings"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        type: "button",
                        onClick: ()=>(0,react_.signOut)(),
                        className: style.link,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineLogout, {
                                className: style.icon
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: style.text,
                                children: "Sign out"
                            })
                        ]
                    })
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/signup",
                        className: style.link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: style.text,
                            children: "Register"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/signin",
                        className: style.link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: style.text,
                            children: "Sign in"
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/MainMenu.jsx









function MainMenu({ className , setDisplayNew , trending , setDisplayMenu  }) {
    const { data: session  } = (0,react_.useSession)();
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
        className: className + " flex-col gap-12 flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: logo/* default */.Z,
                    alt: "Snapify logo",
                    className: "w-[120px]",
                    width: "50",
                    height: "50",
                    priority: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Search/* default */.Z, {
                className: "xl:hidden",
                trending: trending,
                setDisplayMenu: setDisplayMenu
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MenuLinks, {
                session: session
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                type: "button",
                onClick: ()=>{
                    if (!session) return router.push("/signin");
                    setDisplayNew((prev)=>!prev);
                },
                className: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-600 transition-colors focus:ring outline-none p-4 flex items-center gap-2 justify-center rounded-xl shadow-sm",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(hi_.HiOutlinePencilAlt, {
                        className: "mb-[2px] text-xl text-white/[.6]"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-semibold text-sm md:text-[15px]",
                        children: "Post a snap"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1328:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NewSnap)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useNew__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8171);
/* harmony import */ var _ImageInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8471);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useNew__WEBPACK_IMPORTED_MODULE_4__]);
_hooks_useNew__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function NewSnap({ className , setDisplayNew  }) {
    const inputFilesRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const captionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const topicsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [imageFiles, setImageFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const maximumFile = 5;
    // custom hook for certain actions
    const { handleSubmit , handleAddImage , handleRemoveImage  } = (0,_hooks_useNew__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        captionRef,
        topicsRef,
        imageFiles,
        setImageFiles,
        setLoading,
        maximumFile,
        setDisplayNew
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        inputFilesRef.current.value = "";
    }, [
        imageFiles
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className + " z-40 fixed inset-0 bg-black/[.35] items-center justify-center py-6",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
            className: "max-h-full p-7 bg-white w-[90%] max-w-[500px] rounded-lg overflow-auto ",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "font-bold text-xl tracking-tight",
                                children: "Post snap"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                onClick: ()=>setDisplayNew((prev)=>!prev),
                                className: "border border-gray-300 p-2 rounded-lg hover:bg-gray-100 active:bg-transparent transition-colors",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_3__.IoMdClose, {
                                    className: "text-gray-500 text-lg"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-1 mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "caption",
                                className: "text-gray-700 text-sm",
                                children: "Caption (max. 500 characters)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                ref: captionRef,
                                name: "caption",
                                id: "caption",
                                rows: "4",
                                maxLength: "500",
                                title: "Must be 500 characters only",
                                placeholder: "Enter you caption",
                                className: "border border-gray-300 focus:ring-1 focus:ring-blue-600 transition outline-none p-3 rounded-md text-sm"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col mb-4 gap-1",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "images",
                                className: "text-gray-700 text-sm",
                                children: [
                                    "Attach image (max. ",
                                    maximumFile,
                                    ")"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex item-center gap-1 flex-wrap",
                                children: imageFiles !== 0 && imageFiles.map((image, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImageInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        index: index,
                                        image: image,
                                        handleRemoveImage: handleRemoveImage
                                    }, index);
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: ` border relative focus-within:ring-1 focus-within:ring-blue-600 transition border-gray-300 rounded-md items-center justify-center h-[150px] ${imageFiles.length < maximumFile ? "flex" : "hidden"}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "file",
                                        name: "images",
                                        accept: "image/*",
                                        multiple: true,
                                        ref: inputFilesRef,
                                        onChange: handleAddImage,
                                        className: "absolute inset-0 opacity-0 outline-none "
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlinePlus, {
                                                className: "text-blue-600 mx-auto"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-sm text-gray-700",
                                                children: "Upload an image"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col mb-6 gap-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "topics",
                                className: "text-gray-700 text-sm",
                                children: "Topics (comma separated)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                ref: topicsRef,
                                type: "text",
                                id: "topics",
                                name: "topics",
                                placeholder: "developer, programming",
                                pattern: "^([a-zA-Z0-9]+[,\\s]*){1,20}$",
                                title: "Comma separated, maximum of 20 topics",
                                className: "border border-gray-300 p-2 focus:ring-1 focus:ring-blue-600 transition outline-none rounded-md text-sm"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: `${loading ? "pointer-events-none bg-gray-100 text-gray-400" : "pointer-events-auto bg-blue-600 text-white"} flex items-center gap-2 justify-center rounded-full py-2 px-6 transition-colors focus:ring outline-none  w-full max-w-[200px] hover:bg-blue-700 text-sm`,
                        disabled: loading,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-semibold",
                            children: "Post snap"
                        })
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);






function Search({ className , trending , setDisplayMenu  }) {
    const searchRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    // setting up loader state
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setLoading(false);
    }, [
        trending
    ]);
    const handleSearch = (e)=>{
        e.preventDefault();
        router.push(`/search?value=${searchRef.current.value}`);
        setDisplayMenu(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: className + " rounded-xl lg:mb-0",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSearch,
                className: "border justify-between flex items-center rounded-lg px-3 border-gray-300 focus-within:ring-[2px] focus-within:ring-blue-600 transition overflow-hidden mb-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ref: searchRef,
                        type: "text",
                        size: "1",
                        placeholder: "Search user, topics, etc.",
                        className: "p-3 w-full outline-none text-sm bg-transparent"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "rounded-md flex w-10 hover:bg-gray-100 aspect-square",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiSearch, {
                            className: "text-blue-600 m-auto text-lg"
                        })
                    })
                ]
            }),
            trending.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-2 mb-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaFire, {
                                className: "text-blue-600 text-xl"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "font-bold mt-1 md:text-lg",
                                children: "Hot topics"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Loading..."
                            }),
                            trending.map((topic)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "mb-2 group",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: `/search?value=${topic.name}`,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "font-semibold group-hover:text-blue-600 transition-colors text-gray-700 text-sm md:text-[15px]",
                                                children: [
                                                    "#",
                                                    topic.name
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-gray-500 text-sm",
                                                children: [
                                                    topic.quantity,
                                                    " topic",
                                                    topic.quantity > 1 && "s"
                                                ]
                                            })
                                        ]
                                    })
                                }, topic.name))
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StickyBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function StickyBlock() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-[20px] md:h-[32px] bg-gray-100 sticky top-0 z-20"
    });
}


/***/ }),

/***/ 8171:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useNew)
/* harmony export */ });
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6201);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


function useNew(props) {
    const { captionRef , topicsRef , imageFiles , setImageFiles , setLoading , maximumFile , setDisplayNew  } = props;
    const handleSubmit = async (e)=>{
        try {
            e.preventDefault();
            // must have at least 1 image
            if (!imageFiles.length) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"].error("Please select one or more files");
                return;
            }
            react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"].loading("Posting...");
            setLoading(true);
            // converting images to base64 & topics to array before fetching
            const { value: caption  } = captionRef.current;
            const { value: topics  } = topicsRef.current;
            const topicsArr = !topics.trim() ? [] : topics.split(" ").join("").split(",");
            const base64Images = await Promise.all(imageFiles.map((image)=>{
                return new Promise((resolve)=>{
                    let baseURL = "";
                    let reader = new FileReader();
                    reader.readAsDataURL(image);
                    reader.onload = ()=>{
                        baseURL = reader.result;
                        resolve(baseURL);
                    };
                });
            }));
            // fetch data along with the object
            const postData = {
                caption,
                topics: topicsArr,
                images: base64Images
            };
            const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`/api/post/`, postData);
            setLoading(false);
            react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"].dismiss();
            const { success , message  } = response.data;
            if (success) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"].success(message);
                // changing the form inputs back to their empty defaults
                captionRef.current.value = "";
                topicsRef.current.value = "";
                setImageFiles([]);
                setDisplayNew(false);
            } else {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"].error(message);
            }
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"].error("There was an error");
            console.error(error.message);
        }
    };
    const handleAddImage = (e)=>{
        const { files  } = e.currentTarget;
        // only five images are allowed
        const isOverMax = imageFiles.length + files.length > maximumFile;
        if (isOverMax) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_0__["default"].error(`Maximum of ${maximumFile} images only`);
            return;
        }
        setImageFiles([
            ...imageFiles,
            ...files
        ]);
    };
    const handleRemoveImage = (index)=>{
        const newImages = imageFiles.filter((image, i)=>i !== index);
        setImageFiles([
            ...newImages
        ]);
    };
    return {
        handleSubmit,
        handleAddImage,
        handleRemoveImage
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getImageUrl = "https://res.cloudinary.com/snapify/image/upload/";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getImageUrl);


/***/ })

};
;