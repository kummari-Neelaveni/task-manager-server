const express=require("express");
const Router=express.Router();
const {creteTicket,getAllTicket,getTicketById,getAllEmployees}=require("../controllers/Mangercontrollers.js");
const {checkAuth,checkRole}=require("../Middlewares/authmiddleware.js")
const{
    tokenValidator,
    validateMiddleware}
=require("../validators/authvalidators.js")


Router.get("/getAllEmployeeList",tokenValidator,validateMiddleware,checkAuth,checkRole("managers"),getAllEmployees)
Router.post("/create",tokenValidator,validateMiddleware,checkAuth,checkRole("managers"),creteTicket);//task createing to managers
Router.get("/allTickets",tokenValidator,validateMiddleware,checkAuth,checkRole("managers"),getAllTicket);
Router.get("/getTicketById/:id",tokenValidator,validateMiddleware,checkAuth,checkRole("managers"),getTicketById);

module.exports=Router;