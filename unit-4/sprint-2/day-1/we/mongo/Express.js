// const express = require ("express");
const express = require("express");
const app = express();
// app.use(logger);

app.listen(1234 , () => {
    console.log("listening to 1234");
});

app.get("/users",logger("admin"), (req,res) =>{
    return res.send("hello")
})

// function logger(req,res,next){
//     console.log("before");
//     next();
// }


function logger(role){
    return function logger(req,res,next){
        if(role == "admin"){
            req.role = "admin";
        }
        else{
            req.role= "user";
        }
        //  console.log("before");
     next();
         }
}