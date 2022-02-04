const express = require("express");
const app = express();

app.use(logger);

app.get("/books" , (req,res) => {
    res.send("Fetching all books");
    console.log("Fetching all books")
})

app.get("/books:" , (req,res) => {
    res.send("Book name");
    console.log("Book name")
})


app.listen(1234 , () => {
    console.log("books")
})

function logger (req,res,next){
    console.log("before");
    next();
}