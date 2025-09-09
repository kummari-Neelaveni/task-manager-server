const express=require("express");
const Router=express.Router();
const{getProfile, editProfile}=require("../controllers/usecontrollers")
const {tokenValidator,
    validateMiddleware,
    editProfilevalidator
   }=require("../validators/authvalidators.js")
  const {checkAuth}=require("../Middlewares/authmiddleware.js")  
  const {upload}=require("../Utils/MulterFileUpload.js")

Router.get("/Profile",tokenValidator,validateMiddleware,checkAuth,getProfile);


Router.put("/editProfile",tokenValidator,editProfilevalidator,validateMiddleware,checkAuth,upload.single("profilePic"),editProfile)
module.exports=Router;