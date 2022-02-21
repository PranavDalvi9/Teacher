const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

// /users
// router.get("", async (req, res) => {
//   try {
//     const page = req.query.page || 1;
//     const size = req.query.size || 15;

//     // page=11&size=15 = query {page: 11, size: 15}
//     // if page = 1 then return first 1-15 (size) results
//     // if page = 2 then return 16-30 results

//     // page = 1 then (page - 1) = 0 then skip 0 items limit (size) // 1 - 15 items
//     // page = 2  then skip ( (page - 1) * size ) = 15 items and limit (size) // 16-30 items

//     const query = { gender: "Female" };
//     const users = await User.find(query) // 30 documents
//       .skip((page - 1) * size) // page 1 first 15 documents
//       .limit(size)
//       .lean()
//       .exec();

//     const totalPages = Math.ceil(
//       (await User.find(query).countDocuments()) / size
//     );

//     return res.send({ users, totalPages });
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });

// router.get("/:gender", async (req, res) => {
//   try {
//     const page = req.query.page || 1;
//     const size = req.query.size || 15;

//     // page=11&size=15 = query {page: 11, size: 15}
//     // if page = 1 then return first 1-15 (size) results
//     // if page = 2 then return 16-30 results

//     // page = 1 then (page - 1) = 0 then skip 0 items limit (size) // 1 - 15 items
//     // page = 2  then skip ( (page - 1) * size ) = 15 items and limit (size) // 16-30 items

//     const query = { gender: req.params.gender };
//     const users = await User.find(query) // 30 documents
//       .skip((page - 1) * size) // page 1 first 15 documents
//       .limit(size)
//       .lean()
//       .exec();

//     const totalPages = Math.ceil(
//       (await User.find(query).countDocuments()) / size
//     );

//     return res.send({ users, totalPages });
//   } catch (err) {
//     return res.status(500).send({ message: err.message });
//   }
// });




router.get("", async (req, res) => {
  
try {
 
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "f45e7bb46040d5", // generated ethereal user
      pass: "cf5d4df0879841", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

 
return res.send("mail send")

} catch (error) {
  return res.send(error.message)
}

}



module.exports = router;
