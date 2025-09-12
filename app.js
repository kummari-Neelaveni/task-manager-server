const express=require("express");
const app=express();
const cors = require("cors");
require("dotenv").config()
const authRoutes=require("./Routes/authroutes.js")
const  userRoutes=require("./Routes/userRoutes.js")
const connectDatabase=require("./config/db.js")
const {errorhandler}=require("./Middlewares/errormiddleware.js")
const ManagerRoutes=require("./Routes/managerRoutes.js")
const employeeRoutes=require("./Routes/employeeRoutes.js")
connectDatabase();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-frontend-domain.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded(true))


app.use("/auth",authRoutes)
app.use("/user",userRoutes)
app.use("/ticket",ManagerRoutes)
app.use("/employee",employeeRoutes)
// ✅ Allow frontend origin


app.use(errorhandler)
app.use(express.json());

app.listen(process.env.port,()=>{
    console.log("server started on " +process.env.port)
})