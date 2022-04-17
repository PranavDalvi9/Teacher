const express = require("express");
// var cors = require('cors')
// const connect = require("./src/configs/db");
const mongoose = require("mongoose");

const connect = () => {
  // return mongoose.connect("mongodb+srv://champ1:champ1@cluster0.4pboe.mongodb.net/AuthSystem?retryWrites=true&w=majority");

  return mongoose.connect("mongodb://suraj:suraj_4321@cluster0-shard-00-00.qybgl.mongodb.net:27017,cluster0-shard-00-01.qybgl.mongodb.net:27017,cluster0-shard-00-02.qybgl.mongodb.net:27017/evaluation?ssl=true&replicaSet=atlas-3tamaf-shard-0&authSource=admin&retryWrites=true&w=majority");
};


const  {register,login}=require("./src/controllers/userController")
const userController = require("./src/controllers/userController");
// const userProduct = require("./models/user.product");
// const productController=require("./src/controllers/product.controller")



const app = express();
// app.use(cors({ origin:"*"}))
app.use(express.json());


app.post("/register",register)
app.post("/login" ,login)

// app.use("/products", productController);

app.use("/users", userController);
app.set("view engine","hbs")
app.get("/",(req,res)=>{
  res.render("index")
})


const PORT = 2345

app.listen(PORT, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
