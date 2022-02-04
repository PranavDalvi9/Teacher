const express = require("express");
const mongoose = require("mongoose");




const app = express();
// step 1 :- connect to mongodb
const connect = () => {
  return mongoose.connect(
    // mongodb://127.0.0.1:27017/web14
    // "mongodb+srv://dhaval:dhaval_123@cluster0.ljuvz.mongodb.net/web14?retryWrites=true&w=majority"
    "mongodb+srv://pranav:champ123@cluster0.ps04j.mongodb.net/web14?retryWrites=true&w=majority"
  );
};
// step 2 :- create a schema
const userSchema = new mongoose.Schema({
  id: { type: Number, required: true }, // not _id
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: false, default: "Male" },
  age: { type: Number, required: true },
  ip_address: { type: String, required: false },
});
// step 3 :- create a model
const User = mongoose.model("user", userSchema); // user => users
//db.users.find()
// User => db.users
// admin, user, student, teacher, IA, SDE1
app.get("/users", async (req, res) => {
  // thennable => proper then
  try {
    const users = await User.find().lean().exec(); // db.users.find() // proper promise
    return res.send(users);
  } catch (err) {
    return res.send(err.message);
  }
});
app.listen(2345, async function () {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (e) {
    console.log(e.message);
  }
});
// app.get("/user", logger1("admin"), (req, res) => {
//   res.send(req.role);
// });
// function logger1(role) {
//   return function (req, res, next) {
//     if (role == "admin") {
//       req.role = "admin";
//     } else {
//       req.role = "user";
//     }
//     next();
//   };
// }