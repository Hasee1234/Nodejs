const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing
const User = require('../models/userModel'); // Import the User model
const jwt = require('jsonwebtoken'); // Import jsonwebtoken for token generation
const secretKey = process.env.SECRET_KEY ; // Use environment variable for secret key
const doSignUp=async(req, res) => {
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
      data: {//   output,
        name: req.body.name,
        email: req.body.email,
        password: hash,
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
}

const doLogin=async(req, res) => {
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

      
      const secretKey = process.env.SECRET_KEY;
      console.log('secretKey', secretKey);
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
  }

module.exports={
  doSignUp,
  doLogin
}