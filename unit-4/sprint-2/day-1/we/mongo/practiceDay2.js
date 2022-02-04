const express = require("express");
const mongoose = require("mongoose");

const app = express();


const connect = () => {
    return mongoose.connect("mongodb+srv://pranav:champ123@cluster0.ps04j.mongodb.net/web14?retryWrites=true&w=majority")
}


// step 2:

const userSchema = new mongoose.Schema({
    id: {type: Number, require: true},
    first_name: { type: String, require:true },
    last_name : { type: String, require: true},
    email: { type: String, require: true},
    gender : { type: String, require: false, default: "Male"},
    age : { type: Number, require: true},
    ip_address : { type: String, require: false},

})


// step3
let User = mongoose.model("user",userSchema);


// app.listen(2348, async function(){

//     try {
//         await connect();
//         console.log("listening on port");
//     } catch (e) {
//         console.log(e.message)
//     }
//     // await connect(e);
//     // console.log("listening on port",e.message);
// })

// admin users
app.get ("/users" ,async (req,res) => {
    try {
        const users = await User.find().lean().exec();  //db.Users.find()
    return res.send(users);
    } catch (err) {
        return res.send(err.message)
    }
    
});




app.listen(2349, async function(){

    try {
        await connect();
        console.log("listening on port");
    } catch (e) {
        console.log(e.message)
    }
    // await connect(e);
    // console.log("listening on port",e.message);
})


//  const books = require("./booksData.json");

// app.listen(2348, function(){
//     console.log("listening on port");
// })


// app.get ("" , (req,res) => {
//     return res.send("Hello");
// })

// app.get("/books" , (req,res) => {
//     return res.send(books);
// });