
const jwt=require("jsonwebtoken")
require("dotenv").config();
const {userModel}=require("../models/authmodels.js")
exports.checkAuth=async(req,res,next)=>{
    console.log(req.headers)
    const {authorization}=req.headers;
    // console.log(authorization)
    const token=authorization.split(" ")[1]
    try{
        const decodetoken=await jwt.verify(token,process.env.JWT_SECRET_KEY);
        console.log(decodetoken,"234567-----------")
        const check=await userModel.findById(decodetoken.id)

        if(check){
            req.userInfo=check 
            next()
        }else{
            next({statusCode:403,message:"invalid token"})
        }
    }
    catch(error){
   console.log(error)
   next({statusCode:403,message:error.message})
    }
};

exports.checkRole=(...roles)=>{
    return async(req,res,next)=>{
        console.log(roles,"roles");
        const checkUser=req.userInfo;
        const data=await userModel.findById(checkUser._id).select("role")
        if(roles.includes(data.role)){
            next()
        }
        else{
            
           next({statusCode:403,message:`only ${roles.join(",")} can access`})
        }
    };

};
