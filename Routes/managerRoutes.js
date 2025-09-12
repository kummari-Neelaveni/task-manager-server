const express=require("express");
const Router=express.Router();
const {creteTicket,getAllTicket,getTicketById,getAllEmployees}=require("../controllers/Mangercontrollers.js");
const {checkAuth,checkRole}=require("../Middlewares/authmiddleware.js")
const{
    tokenValidator,
    validateMiddleware}
=require("../validators/authvalidators.js")


Router.get("/getAllEmployeeList",tokenValidator,validateMiddleware,checkAuth,checkRole("manager"),getAllEmployees)
Router.post("/create",tokenValidator,validateMiddleware,checkAuth,checkRole("manager"),creteTicket);//task createing to managers
Router.get("/allTickets",tokenValidator,validateMiddleware,checkAuth,checkRole("manager"),getAllTicket);
Router.get("/getTicketById/:id",tokenValidator,validateMiddleware,checkAuth,checkRole("manager"),getTicketById);

module.exports=Router;