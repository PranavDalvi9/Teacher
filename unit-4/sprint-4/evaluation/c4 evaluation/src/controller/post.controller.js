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


router.get("", async(req,res) =>{
    try {
        const page = req.query.page || 1;
        const size = req.query.size || 10;

        const user = await User.find()
        .skip((page-1)*size)
        .limit(size)
        .lean().exec();
        return res.send(user);
    } catch (error) {
        console.log(error.message);
    }
})




module.exports= router;