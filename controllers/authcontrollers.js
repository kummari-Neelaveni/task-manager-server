
const bcryptjs=require("bcryptjs")
const{userModel}=require("../models/authmodels.js")
const {generateToken}=require("../Utils/token.js")

const signupcontroller=async(req,res,next)=>{
   try{
    const {name,username,email,password}=req.body;
    const hashpassword= await bcryptjs.hash(password,12);
    const user= await userModel.create({
        name:name,
        username:username,
        email:email,
        password:hashpassword,
        
    })
    
    res.json(user);
   } catch(error){
    console.log(error)
   const err={statuscode:400,message:error.message}
   next(err)
   }

};
const logincontroller=async(req,res,next)=>{
   try{
    const {email,password}=req.body;
    const finduser=await userModel.findOne({email:email})
   const decryptpassword=await bcryptjs.compare(password,finduser.password);
   if(decryptpassword){
    const token=await generateToken(finduser);

    return res.status(200).json({message:"login sucessfully",user:
      {
    _id: finduser._id,
    name: finduser.name,
    username: finduser.username,
    email: finduser.email,
    role: finduser.role,
  },
token})
   }else{
    return res.status(429).json({message:"invalid password/email"})
   }
   }
   catch(error){
    const err={statuscode:400,message:error.message}
    next(err)

   }
};
module.exports={signupcontroller,logincontroller}