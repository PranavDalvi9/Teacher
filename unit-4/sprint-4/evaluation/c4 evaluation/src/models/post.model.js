const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    body : {type: String , require:false},
    likes : {type:Number,  require:true}
},{
    versionKey:false,
    timestamps:true
});

const Post = mongoose.model("post",postSchema);

module.exports = Post

