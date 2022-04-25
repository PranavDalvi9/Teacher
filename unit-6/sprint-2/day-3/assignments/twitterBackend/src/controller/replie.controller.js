const { Router } = require("express");

const express = require("express");

const {
  upload,
  uploadSingle,
  uploadMultiple,
} = require("../middleware/file_upload")

const { Replies } = require("../models/replies.model");

const router = Router();

router.post("/replie", uploadSingle("post_pic"), async (req, res) => {
  try {
    const replie = await  Replies .create({
      replies : req.body.replies,
      profile_pic: req.file.path,
    });

    return res.send( replie );
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


router.get("/replies", async (req, res) => {
    try {
      const replies = await Replies.find().lean().exec();
  
      return res.send({ replies });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


module.exports = router;