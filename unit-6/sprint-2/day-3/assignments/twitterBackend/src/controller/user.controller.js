const express = require("express");
const { Router } = require('express');
const {
  upload,
  uploadSingle,
  
} = require("../middleware/file_upload");

const { User , Post } = require("../models/post.model");

const router = Router();

router.post("/user", uploadSingle("profile_pic"), async (req, res) => {
  try {
    const user = await User.create({
      id: req.body.id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      birth_date: req.body.birth_date,
      profile_pic: req.file.path,
    });

    return res.send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.send({ users });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


router.post("/post", uploadSingle("profile_pic"), async (req, res) => {
    try {
      const post = await Post.create({
        tweet: req.body.tweet,
        like : req.body.like,
        replies : req.body.replies,
        post_pic:  req.file.path,
        user_id: req.body.id
      });
  
      return res.send(post);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.get("/posts", async (req, res) => {
    try {
      const post = await Post.find().lean().exec();
  
      return res.send({ post });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  

module.exports = router;
