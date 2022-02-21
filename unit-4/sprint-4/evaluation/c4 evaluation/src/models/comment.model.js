const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    "body":{type:String, required:true},
    "post_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
        required:true,
    },
    "user_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true,
    }
},{
    versionKey:false,
    timestamps:true
});

const CommentSchema = mongoose.model("postLikes",commentSchema);

module.exports = CommentSchema

