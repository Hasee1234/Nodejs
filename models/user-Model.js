const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
      type:String,
      unique:true,
      required:true
    },
    email:{
      type:String,
      unique:true,
      required:true
    },
    password:{
      type:String,
      unique:true,
      required:true
    },
    address:String,
  })
  const User=mongoose.model('User',userSchema)
  module.exports=User