"use strict";
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 4838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Carousel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: ./utils/getImageUrl.js
var getImageUrl = __webpack_require__(5149);
// EXTERNAL MODULE: external "react-swipeable"
var external_react_swipeable_ = __webpack_require__(3789);
;// CONCATENATED MODULE: ./assets/blank-image.png
/* harmony default export */ const blank_image = ({"src":"/_next/static/media/blank-image.2d49ba71.png","height":552,"width":552,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAMUlEQVR42kWL2wkAIBRC3X/EgqLUPTIukR8+4IhNRVygbFlEMpKQNWbslt6qFPThdz8A6DjkayumhQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/Carousel.jsx







function Carousel({ images  }) {
    const [index, setIndex] = (0,external_react_.useState)(0);
    const translate = 100 / images.length * index;
    const isMultiple = images.length - 1 !== 0;
    // prev and next button
    const handleNavigation = (type)=>{
        if (type === "prev") {
            if (index === 0) return;
            setIndex(index - 1);
        }
        if (type === "next") {
            if (index === images.length - 1) return;
            setIndex(index + 1);
        }
    };
    // image swaiper for mobile
    const handlers = (0,external_react_swipeable_.useSwipeable)({
        onSwipedLeft: ()=>handleNavigation("next"),
        onSwipedRight: ()=>handleNavigation("prev")
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative overflow-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: blank_image,
                alt: "",
                width: 400,
                height: 400,
                className: "absolute w-full h-full inset-0",
                priority: true
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ...handlers,
                style: {
                    transform: `translateX(-${translate}%)`,
                    width: `${images.length * 100}%`
                },
                className: `relative transition-transform ease-in-out flex`,
                children: images.map((image, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "aspect-square w-full h-full",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: getImageUrl/* default */.Z + images[index],
                            alt: "",
                            width: 400,
                            height: 400,
                            className: "w-full h-full object-cover"
                        })
                    }, index))
            }),
            isMultiple && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    [
                        "prev",
                        "next"
                    ].map((type)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: `${type === "prev" ? "left-4" : "right-4"} -translate-y-1/2 absolute top-1/2  text-gray-400 text-2xl bg-black/[.25] rounded-full p-2 hover:bg-black/[.30] active:bg-black/[.25]`,
                            onClick: ()=>handleNavigation(type),
                            children: type === "prev" ? /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineLeft, {
                                className: "text-white"
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineRight, {
                                className: "text-white"
                            })
                        }, type)),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute z-10 left-1/2 -translate-x-1/2 bottom-6 flex items-center gap-2 opacity",
                        children: images.map((image, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `${i === index ? "w-3 h-3" : "w-2 h-2"} rounded-full bg-black/[.25] transition-all`
                            }, i))
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5775:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_tfi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1740);
/* harmony import */ var react_icons_tfi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_tfi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4838);
/* harmony import */ var _utils_getImageUrl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5149);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9648);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_usePost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4203);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_8__, _hooks_usePost__WEBPACK_IMPORTED_MODULE_10__]);
([axios__WEBPACK_IMPORTED_MODULE_8__, _hooks_usePost__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function Post({ session , post , actions , setPosts  }) {
    const { _id: postId , authorId , author , topics , content: { caption , images  } , likes , comments , createdAt  } = post;
    const { image , username  } = author;
    const [followBtnStyle, setFollowBtnStyle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [isLiked, setIsLiked] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const commentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [showComments, setShowComments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [commentDisplay, setCommentDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(3);
    const limitedComments = comments.slice(0, commentDisplay);
    // handles certain actions
    const { loading , handleFollow , handleLike , handleComment  } = (0,_hooks_usePost__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(session, commentRef, authorId, postId, actions, setPosts);
    // setting like button style
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!session) {
            setIsLiked(false);
            return;
        }
        const liked = likes.some((like)=>like === session._id);
        setIsLiked(liked);
    }, [
        likes,
        session
    ]);
    // set follow btn style
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!session) {
            setFollowBtnStyle(false);
            return;
        }
        const getStatus = async ()=>{
            const response = await axios__WEBPACK_IMPORTED_MODULE_8__["default"].get(`/api/users/${session._id}`);
            const hasFollowed = response.data.user.following.some((id)=>id === authorId);
            setFollowBtnStyle(hasFollowed);
        };
        getStatus();
    }, [
        post
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-4 md:px-7",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "justify-between flex items-start mb-3",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-2 items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "aspect-square overflow-hidden w-[40px] rounded-full border border-gray-300",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            src: _utils_getImageUrl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z + image,
                                            alt: "avatar",
                                            width: "40",
                                            height: "40",
                                            className: "object-cover w-full h-full"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                href: `/user/${username}`,
                                                className: "font-bold text-sm md:text-[15px] hover:text-blue-600 transition-colors",
                                                children: username
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm text-gray-400",
                                                children: moment__WEBPACK_IMPORTED_MODULE_7___default()(createdAt).fromNow()
                                            })
                                        ]
                                    })
                                ]
                            }),
                            authorId !== session?._id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                onClick: handleFollow,
                                className: `${loading.follow ? "text-gray-400 bg-gray-100" : "text-blue-600 bg-blue-600/[.10] hover:bg-blue-600/[.20]"}  font-medium  py-2 px-4 text-sm rounded-lg transition-colors`,
                                disabled: loading.follow,
                                children: [
                                    "Follow",
                                    followBtnStyle && "ed"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-2 text-[15px] text-gray-600",
                        children: caption
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex gap-2 mb-2",
                        children: topics !== 0 && topics.map((topic, index)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                href: `/search?value=${topic}`,
                                className: "text-blue-600 text-[15px] hover:underline",
                                children: [
                                    "#",
                                    topic
                                ]
                            }, index);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Carousel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                images: images
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-7",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center mb-2 gap-4 py-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                onClick: handleLike,
                                className: "group flex text-[15px] items-center gap-2",
                                disabled: loading.like,
                                children: [
                                    isLiked ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillHeart, {
                                        className: "text-xl text-gray-500 group-hover:text-blue-600 transition-colors"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineHeart, {
                                        className: "text-xl text-gray-500 group-hover:text-blue-600 transition-colors"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-sm md:text-[15px] text-gray-700 group-hover:text-blue-600 transition-colors",
                                        children: [
                                            likes.length,
                                            " Like",
                                            likes.length > 1 && "s"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                className: "group flex items-center text-[15px] gap-2 text-gray-700 hover:text-blue-600 transition-colors",
                                onClick: ()=>setShowComments(!showComments),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tfi__WEBPACK_IMPORTED_MODULE_5__.TfiComment, {
                                        className: "text-gray-500 group-hover:text-blue-600 transition-colors"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-sm md:text-[15px] text-gray-700 group-hover:text-blue-600 transition-colors",
                                        children: [
                                            comments.length,
                                            " Comment",
                                            comments.length > 1 && "s"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${showComments ? "block" : "hidden"}`,
                        children: [
                            limitedComments !== 0 && limitedComments.map((item)=>{
                                const { _id , commenterId , commenter: { username , image  } , comment , createdAt  } = item;
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-start gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "aspect-square overflow-hidden w-[45px] rounded-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                src: _utils_getImageUrl__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z + image,
                                                alt: "",
                                                className: "w-full h-full object-cover",
                                                width: "45",
                                                height: "45"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex gap-4 justify-between",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                            href: `/user/${username}`,
                                                            className: "font-bold hover:text-blue-600 transition-colors text-sm md:text-[15px]",
                                                            children: username
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-sm text-gray-400",
                                                            children: moment__WEBPACK_IMPORTED_MODULE_7___default()(createdAt).fromNow()
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm md:text-[15px] text-gray-600",
                                                    children: comment
                                                })
                                            ]
                                        })
                                    ]
                                }, _id);
                            }),
                            commentDisplay < comments.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "text-sm text-blue-600 hover:underline",
                                onClick: ()=>setCommentDisplay(commentDisplay + 3),
                                children: "Show more"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleComment,
                                className: "border mt-4 justify-between flex items-center rounded-lg px-2 border-gray-200 focus-within:ring-1 transition focus-within:ring-blue-700 overflow-hidden mb-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        placeholder: "Add comment",
                                        maxLength: "64",
                                        ref: commentRef,
                                        required: true,
                                        className: "p-3 min-w-0 grow outline-none text-sm text-gray-700"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "rounded-md p-2 w-8 hover:bg-gray-200 aspect-square transition-colors",
                                        disabled: loading.comment,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdSend, {
                                            className: "text-lg text-blue-600"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getApiUrl)
/* harmony export */ });
function getApiUrl() {
    const url = {
        development: "http://localhost:3000",
        production: "https://snapify.vercel.app"
    };
    const env = "production" || 0;
    return url[env];
}


/***/ }),

/***/ 4203:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePost)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var _utils_actionFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9017);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _utils_actionFetch__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _utils_actionFetch__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function usePost(session, commentRef, authorId, postId, actions, setPosts) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const { baseUrl , query , page  } = actions;
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        follow: false,
        like: false,
        comment: false
    });
    const handleFollow = async ()=>{
        if (!session) {
            router.push("/signin");
            return;
        }
        setLoading({
            ...loading,
            follow: true
        });
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(`/api/users?type=follow&authorId=${authorId}`);
            const posts = await (0,_utils_actionFetch__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(baseUrl, query, page);
            setLoading({
                ...loading,
                follow: false
            });
            setPosts(posts);
        } catch (error) {
            console.error(error.message);
        }
    };
    const handleComment = async (e)=>{
        try {
            e.preventDefault();
            if (!session) {
                router.push("/signin");
                return;
            }
            const { value  } = commentRef.current;
            setLoading({
                ...loading,
                comment: true
            });
            const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(`/api/post/${postId}?type=comment`, {
                comment: value
            });
            commentRef.current.value = "";
            const posts = await (0,_utils_actionFetch__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(baseUrl, query, page);
            setLoading({
                ...loading,
                comment: false
            });
            setPosts(posts);
        } catch (error) {
            console.error(error.message);
        }
    };
    const handleLike = async ()=>{
        try {
            !session && router.push("/signin");
            setLoading({
                ...loading,
                like: true
            });
            const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(`/api/post/${postId}?type=like`);
            const posts = await (0,_utils_actionFetch__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(baseUrl, query, page);
            setLoading({
                ...loading,
                like: false
            });
            setPosts(posts);
        } catch (error) {
            console.error(error.message);
        }
    };
    return {
        loading,
        handleFollow,
        handleLike,
        handleComment
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9029:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useScroll)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_encodeUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6118);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function useScroll(initialPosts, query) {
    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2);
    const [hasMore, setHasMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const baseUrl = "/api/post";
    // fetch posts as user's scrolls the page
    const fetchData = async ()=>{
        try {
            const url = (0,_utils_encodeUrl__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(baseUrl, {
                ...query,
                page
            });
            const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
            // if there is no more to fetch, setHasMore to false in order for scroll event not running
            if (response.data.posts.length === 0) {
                setHasMore(false);
                return;
            }
            setPosts([
                ...posts,
                ...response.data.posts
            ]);
            setPage(page + 1);
        } catch (error) {
            console.error(error);
        }
    };
    // applying scroll event
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // check first if posts has items and hasMore to true, before running this event
        if (posts.length !== 0 && hasMore) {
            window.addEventListener("scroll", handleScroll);
            return ()=>window.removeEventListener("scroll", handleScroll);
        }
        // if theres no posts, set hasMore to false and do not run this scroll event anymore
        if (posts.length === 0 && !hasMore) {
            setHasMore(false);
        }
        // calculates the value when user reached the end of the page
        function handleScroll() {
            const { scrollTop , offsetHeight  } = document.documentElement;
            const isAtBottom = Math.abs(window.innerHeight + scrollTop - offsetHeight) <= 1;
            if (isAtBottom) {
                fetchData();
            }
        }
    }, [
        posts.length,
        hasMore
    ]);
    // set back to default every time page reloads
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setHasMore(true);
        setPage(2);
        setPosts(initialPosts);
    }, [
        initialPosts
    ]);
    return {
        baseUrl,
        page,
        posts,
        setPosts,
        hasMore
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9017:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ actionFetch)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _encodeUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6118);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// refetch posts with certain action like comment, like or follow
async function actionFetch(baseUrl, query, page) {
    try {
        const url = (0,_encodeUrl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(baseUrl, {
            ...query,
            page,
            noSkip: true
        });
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(url);
        return response.data.posts;
    } catch (error) {
        console.error(error);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const encodeUrl = (url, queries = {})=>{
    const queryString = Object.entries(queries).map(([key, value])=>`${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
    if (!queryString) {
        return encodeURI(url);
    }
    return `${encodeURI(url)}?${queryString}`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (encodeUrl);


/***/ })

};
;