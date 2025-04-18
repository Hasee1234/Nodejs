var express= require("express");
const { doSignUp, doLogin } = require("../Controllers/authController");
var authRouter=express.Router();

authRouter.post("/signUp",doSignUp)
authRouter.post("/signUp",doLogin)

module.exports=authRouter