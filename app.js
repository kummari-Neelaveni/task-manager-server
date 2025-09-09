const express=require("express");
const app=express();
require("dotenv").config()
const authRoutes=require("./Routes/authroutes.js")
const  userRoutes=require("./Routes/userRoutes.js")
const connectDatabase=require("./config/db.js")
const {errorhandler}=require("./Middlewares/errormiddleware.js")
const ManagerRoutes=require("./Routes/managerRoutes.js")
const employeeRoutes=require("./Routes/employeeRoutes.js")
connectDatabase();

app.use(express.json());
app.use(express.urlencoded(true))


app.use("/auth",authRoutes)
app.use("/user",userRoutes)
app.use("/ticket",ManagerRoutes)
app.use("/employee",employeeRoutes)

app.use(errorhandler)

app.listen(process.env.port,()=>{
    console.log("server started on " +process.env.port)
})