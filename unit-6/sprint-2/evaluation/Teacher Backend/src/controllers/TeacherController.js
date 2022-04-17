const express = require("express")
const Teacher = require("../models/TeacherModel");

const router = express.Router()

router.post("",async(req,res) => {
    try {
        console.log(req.body)
        const user = await Teacher.create(req.body)
        return res.send(user)
    } catch (error) {
       return res.send(500).send({message: error.message})
    }
})


router.get("", async (req, res) => {
    try {
      const user = await Teacher.find().populate({path: "classes", select:["class1"]}).lean().exec();
      console.log(user)
      return res.send(user)
    } catch (error) {``
      return res.send(error);
    }
  });

module.exports= router