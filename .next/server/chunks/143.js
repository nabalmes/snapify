"use strict";
exports.id = 143;
exports.ids = [143];
exports.modules = {

/***/ 7143:
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


/***/ })

};
;