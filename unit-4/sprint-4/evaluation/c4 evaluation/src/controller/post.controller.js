// const {body , validationResult} = require("express-validator");

const express = require("express");
const User = require("../models/post.model");
// const user = require("../models/user.model")
const router = express.Router();

router.post("",async(req,res) =>{
    try {
        const user = await User.create(req.body);
        return res.send(user);
    } catch (error) {
        console.log(error.message);
    }
})


router.post("", async(req,res) =>{
    try {
        const user = await User.create(req.body);
        return res.send(user);
    } catch (error) {
        console.log(error.message);
    }
})




module.exports= router;