const express = require("express");
const cors = require('cors')
const connect = require("./configs/db");

const { userController, postController }= require("./controller/user.controller");
const {replieController} = require("./controller/replie.controller")

const app = express()

app.use(express.json());
app.use(cors());
app.use("/", userController)
app.use("/", postController)
app.use("/", replieController)
const PORT = process.env.PORT || 8000
 
app.listen(PORT, async () => {
    try{
        await connect();

    } catch (err) {
        console.log("Listening on port "+ PORT +"...")
    }
});
 