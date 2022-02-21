const {body , validationResult} = require("express-validator");

const express = require("express");
const User = require("../models/user.model");
// const user = require("../models/user.model")
const router = express.Router();

router.post("", 
body("first_name")
.isString()
.isLowercase()
.isLength({min:3 , max:30})
.withMessage("first name should be between 3 to 30 chars"),

body("last_name")
.isString()
.isLowercase()
.isLength({min:3 , max:30})
.withMessage("last name should be between 3 to 30 chars"),

body("age")
.isAlphanumeric(),

body("email")
.isEmail()
.custom(async (value) => {
    const user = await User.findOne({email : value});

    if(user){
        throw new Error("email is in use")
    }
    return true;
}),

async(req,res) =>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            let newErrors;
            newErrors = errors.array().map((err) => {
                console.log("err", err);
                return{key:err.param, message:err.message}
            })
            return res.status(400).send({errors: newErrors})
        }

       
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