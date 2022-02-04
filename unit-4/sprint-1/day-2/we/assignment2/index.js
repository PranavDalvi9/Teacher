const express = require("express");
const app = express();
 const books = require("./booksData.json");

app.listen(2348, function(){
    console.log("listening on port");
})


app.get ("" , (req,res) => {
    return res.send("Hello");
})

app.get("/books" , (req,res) => {
    return res.send(books);
});

