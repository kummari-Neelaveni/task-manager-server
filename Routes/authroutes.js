const express=require("express");
const Router=express.Router()
const {signupcontroller, logincontroller } = require("../controllers/authcontrollers.js");
const {signupValidator,loginValidator}=require("../validators/authvalidators.js")



Router.post("/signup",signupValidator,signupcontroller);
Router.post("/login",loginValidator,logincontroller);

module.exports=Router