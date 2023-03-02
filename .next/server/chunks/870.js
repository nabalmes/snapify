"use strict";
exports.id = 870;
exports.ids = [870];
exports.modules = {

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

/***/ 870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authOptions": () => (/* binding */ authOptions),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2113);
/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7449);
/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1832);
/* harmony import */ var _database_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9656);
/* harmony import */ var _database_models_user__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_models_user__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);





const authOptions = {
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({
            name: "credentials",
            credentials: {},
            authorize: async (credentials, req)=>{
                const { contact , password , sessionId  } = credentials;
                let user = null;
                await (0,_database_dbConnect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
                if (sessionId) {
                    user = await _database_models_user__WEBPACK_IMPORTED_MODULE_3___default().findOne({
                        _id: sessionId
                    });
                    if (!user) throw new Error("There's something wrong");
                } else {
                    // validate user
                    user = await _database_models_user__WEBPACK_IMPORTED_MODULE_3___default().findOne({
                        contact
                    });
                    if (!user) throw new Error("Contact or password incorrect");
                    const match = bcrypt__WEBPACK_IMPORTED_MODULE_4___default().compareSync(password, user.password);
                    if (!match) throw new Error("Contact or password incorrect");
                }
                // remove unnecessary props and return as payload
                const { password: secret , ...others } = user._doc;
                return others;
            }
        })
    ],
    callbacks: {
        async jwt ({ token , user  }) {
            if (user) token = {
                ...token,
                ...user
            };
            return token;
        },
        async session ({ session , token  }) {
            if (token) session = {
                ...session.user,
                ...token
            };
            return session;
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));


/***/ })

};
;