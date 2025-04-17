const express = require("express");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const cors = require("cors");
const bodyParser = require("body-parser");
const Todo = require("./Models/Todo"); // Import the Todo model
const connectDB = require("./Config/db");

const app = express();
const port = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(authVerify);


// Start Server After DB Connects
const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

// API Endpoints

// Check if server is running
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully");
});

// Sample Todos Data (Replace this with a Database Collection later)
// let todos = [
//   { id: 1, title: "Todo 1", description: "description 1" },
//   { id: 2, title: "Todo 2", description: "description 2" },
//   { id: 3, title: "Todo 3", description: "description 3" },
// ];




// Start the Server
start();

// authentication-login/signup
// file upload =>
  //frontend ->storage ->url ->api ->db(recommended)
  //frontend ->api ->storage ->url ->db
//folder structure od node.js
//connection with frontend
//how to do same work in nextjs

//authentication you take data in login signup sp post method


app.post("/auth/login",async(req, res) => {
  try {
  if(!req.body?.email){//to say user to enter email and password
    res.json({
      data:[], 
      status:"error",
      error:"email is required"
    })}
  if(!req.body?.password){
    res.json({
      data:[],
      status:"error",
      error:"password is required"
    })}
    const userFound=await User.findOne({email:req.body?.email})//to find the user in db
    if(!userFound){//if user not found
      res.json({
        data:[],
        status:"error",
        error:"user not found"
      })
    }
    console.log("user found",userFound);
    
    var passwordIsValid=bcrypt.compareSync(
      req.body.password,
      userFound.password
    )//to compare the password in db and entered password
    if(!passwordIsValid){//if password is not valid
      res.json({
        data:[],
        status:"error",
        error:"password is not valid" 
      })
    }
    var token = jwt.sign({_id:userFound._id, email:userFound.email,name:userFound.name}, secretKey);
    console.log("token",token);
    
    res.json({
      data: {
        token:token,
        email:userFound.email,
        name:userFound.name,
        address:userFound.address
      },
      status: "success"
    }); 
     
  } catch (error) {
   res.json({
      data:[],
      status:"success",
   }) 
  }
});

app.post("/auth/signup",async(req, res) => {
  try {
    console.log('req.body recieved',req.body);
    if(!req.body?.password){
      res.json({
        data:[],
        status:"error",
        error:"password is required"
      })
    }
    var hash=bcrypt.hashSync(req.body.password,8);//to encypt passwords
    console.log('hash',hash);
    
    let newUser= new User({
      name:req.body?.name,
      email:req.body?.email,
      password:hash,  
      address:req.body?.address
    })
    let output =await newUser.save()

    res.json({
      data: {
        name: req.body.name,
        email: req.body.email,
        password: hash, // showing the hashed password in postman
        address: req.body.address
      },
      status: "success"
    }); 
    
  } catch (error) {
   res.json({
      data:[],
      status:"error",
      error:error
   }) 
  }
});

//validation
app.post('/xyz', async(req,res)=>{
  try {
    console.log('req.body received',req.body.token);
    var decoded=jwt.verify(req.body.token,secretKey)
    console.log('decoded',decoded);
    if(!decoded){
      res.json({
        data:[],
        status:"error",
        error:"login"
      })
    }
      res.json({
        data:decoded,
        status:"success"
      })
    } catch (error) { 
      
      res.json({
        data:[],
        status:"error",
        error:error
      })
    }
  
})