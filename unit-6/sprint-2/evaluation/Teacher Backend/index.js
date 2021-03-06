const { response } = require("express");
const express = require("express");

// added cors 
const cors = require("cors");

const mongoose = require("mongoose");

const connect = () => {
  // return mongoose.connect("mongodb://suraj:suraj_4321@cluster0-shard-00-00.qybgl.mongodb.net:27017,cluster0-shard-00-01.qybgl.mongodb.net:27017,cluster0-shard-00-02.qybgl.mongodb.net:27017/evaluation?ssl=true&replicaSet=atlas-3tamaf-shard-0&authSource=admin&retryWrites=true&w=majority");
return mongoose.connect("mongodb+srv://pranav:pranav123@cluster0.gvulk.mongodb.net/DataTeacherall?retryWrites=true&w=majority");
};

let port = process.env.PORT || 2344;

const  {register,login}=require("./src/controllers/userController")
const userController = require("./src/controllers/userController");

// cors open
app.use(cors());

const  teacherController = require("./src/controllers/TeacherController")

const classController = require("./src/controllers/ClassController")


const app = express();
// app.use(cors({ origin:"*"}))
app.use(express.json());
app.use("/teacher",teacherController)
app.use("/class",classController)


app.post("/register",register)
app.post("/login" ,login)

app.get("/",(req,res)=>{
  console.log("geti")
})


// const PORT = 2344

app.listen(port, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
