const mongoose=require("mongoose")
require("dotenv").config()


async function connectDatabase(){
    try{
        await mongoose.connect(process.env.mongoose_url,{dbName:process.env.mongodb_name})
        console.log("database conected sucessfully ",process.env.mongodb_name)
    } catch(error){
        console.log("database connection failed")
            console.log(error)
       
    }
};
module.exports=connectDatabase;