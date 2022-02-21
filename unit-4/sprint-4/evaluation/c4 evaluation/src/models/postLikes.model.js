const mongoose = require("mongoose");

const postLikesSchema = new mongoose.Schema({
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

const PostLikes = mongoose.model("postLikes",postLikesSchema);

module.exports = PostLikes

