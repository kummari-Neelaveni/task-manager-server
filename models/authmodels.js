const mongoose=require("mongoose");

const authschema=new mongoose.Schema({
    name:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    role:{type:String,
        enum:["manager","employee"],
        required:true,
        default:"employee"},
    password:{type:String,required:true}  ,
    profilePic:{type:String} , 

    },{timestamps:true}
);
const userModel=mongoose.model("users",authschema);
module.exports={userModel}
