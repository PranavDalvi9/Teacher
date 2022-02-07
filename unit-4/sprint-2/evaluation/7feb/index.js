const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

const connect = () =>{
    return mongoose.connect("mongodb+srv://champ:champ123@cluster0.4pboe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
};

const userSchema = new mongoose.Schema({
    firstName : {type:String, require:true},
    middleName: {type:String},
    lastName : {type:String, require:true},
    age: {type:Number, require:true},
    email:{type:String, require:true},
    gender:{type:String, require:false, default:"female"}
},
{
    versionKey:false,
    timestamps:true
});


const branchSchema = new mongoose.Schema({
    name : {type:String, require:true},
    address:{type:String, require:true},
    IFSC:{type:String, require:true},
    MICR:{type:Number, require:true},
},
{
    versionKey:false,
    timestamps:true,
});


const savingSchema = new mongoose.Schema({
    accountNumber:{type:String, require:true},
    balance:{type:Number, require:true},
    interestRate:{type:Number, require:true},
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true,
    },
    branch_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"branch",
        require:true,
    }
},
{
    versionKey:false,
    timestamps:true,
});

const fixedSchema = new mongoose.Schema({
    accountNumber:{type:String, require:true},
    balance:{type:Number, require:true},
    interestRate:{type:Number, require:true},
},
{
    versionKey:false,
    timestamps:true,
});




//  -----------------user ---------------------------------
const User = mongoose.model("user",userSchema);

app.get("/user", async(req,res) =>{
    try {
        const user = await User.find().lean().exec();
        res.send(user);
    } catch (error) {
        res.send(error.message);
    }
});


app.post("/user" , async(req,res) =>{
    try {
        const user = await User.create(req.body);
    res.send(user);
    } catch (error) {
        res.send(error.message);
    }
})




// --------------------branch----------------------


const Branch = mongoose.model("branch",branchSchema);

app.post("/branch", async(req,res) =>{
    try {
        const branch = await Branch.create(req.body);
        res.send(branch);

    } catch (error) {
        res.send(error.message);
    }
})

app.get("/branch", async(req,res) =>{
    try {
        const branch = await Branch.find().lean().exec();
        res.send(branch);
    } catch (error) {
        res.send(error.message);
    }
})


// -----------------saving acc-------------


const Saving = mongoose.model("saving", savingSchema);

app.post("/saving", async(req,res) =>{
    try {
        const saving = await Saving.create(req.body);
        res.send(saving);

    } catch (error) {
        res.send(error.message);
    }
})

app.get("/saving", async(req,res) =>{
    try {
        const saving = await Saving.find().populate("user_id").populate("branch_id").lean().exec();
        res.send(saving);
    } catch (error) {
        res.send(error.message);
    }
})

// -----------------fixed -----------------


const Fixed = mongoose.model("fixed", fixedSchema);

app.post("/fixed", async(req,res) =>{
    try {
        const fixed = await Fixed.create(req.body);
        res.send(fixed);

    } catch (error) {
        res.send(error.message);
    }
})

app.get("/fixed", async(req,res) =>{
    try {
        const fixed = await Fixed.find().lean().exec();
        res.send(fixed);
    } catch (error) {
        res.send(error.message);
    }
})


// -------------------
app.listen(2134, async function(){
    try {
        await connect();
        console.log("listen")
    } catch (error) {
       console.log(error.message);
    }
});