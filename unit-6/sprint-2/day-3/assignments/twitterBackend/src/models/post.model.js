const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true }, // _id => MongoID, id => regular id
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: false, default: "Male" },
    age: { type: Number, required: true },
    birth_date: { type: Date, required: true },
    profile_pic: [{ type: String }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);  

const postSchema = new mongoose.Schema(
    {
        tweet: {type: String, required: true},
        like : { type: Number, required: false},
        replies : [{type: String}],
        post_pic: [{ type: String }],
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
          },
    }
);

const Post = mongoose.model("post", postSchema);  

module.exports = { User, Post };
