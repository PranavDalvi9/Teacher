const express = require("express");

const connect = require("./configs/db");

const userController = require("./controller/user.controller")


const postController= require("./controller/post.controller")

const postLikesSchema= require("./controller/postLikes.controller")

const app = express();
app.use(express.json());
app.use("/users",userController);
app.use("/post", postController);
app.use("/postLikes", postController);
app.listen(2345, async() => {
    try {
        await connect();
    } catch (error) {
        console.error(error.message)
    }

    console.log("listening port 2345")
})