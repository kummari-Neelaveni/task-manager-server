const express=require("express");
const Router=express.Router();
const {viewAssignedTickets,updateTicketstatusById,addCommentById, viewcommentsTicketById}=require("../controllers/employeecontrollers.js")
const{tokenValidator,validateMiddleware}=require("../validators/authvalidators.js")
const {checkAuth,checkRole}=require("../Middlewares/authmiddleware.js")

Router.get("/viewTickets",tokenValidator,validateMiddleware,checkAuth,checkRole("employees"),viewAssignedTickets)
Router.put("/updateTicketStatus/:ticketId",tokenValidator,validateMiddleware,checkAuth,checkRole("employees"),updateTicketstatusById);
Router.post("/addCommentsTiTicket/:TicketId",tokenValidator,validateMiddleware,checkAuth,checkRole("employees"),addCommentById);
Router.get ("/viewCommentsTicket/:TicketId",tokenValidator,validateMiddleware,checkAuth,checkRole("employees"),viewcommentsTicketById)

module.exports=Router;