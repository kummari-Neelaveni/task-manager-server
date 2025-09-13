const{TaskModel}=require("../models/taskmodels")

exports.viewAssignedTickets=async(req,res,next)=>{
   try {
    const userId = req.userInfo._id;
    const allTickets = await TaskModel.find()
      .where({ assignTo: userId })
      .populate("createdBy", ["name", "username"]);
    res.status(200).json({ message: "your assigned tasks", data: allTickets });
  } catch (error) {
    console.log(error);
    const err = { statusCode: 400, message: "something went wrong" };
    next(err);
  }
};

exports.updateTicketstatusById=async(req,res,next)=>{
     try {
    const { taskStatus } = req.body;
    const taskId = req.params.ticketId;
    const userId = req.userInfo._id;
    const task = await TaskModel.findByIdAndUpdate(
      taskId,
      {
        status: taskStatus,
      },
      { new: true }
    ).where({
      assignTo: userId,
    });
    if (task) {
      return res.json({ message: "Task updated successfully", data: task });
    } else {
      return res.status(404).json({ message: "No task found" });
    }
  } catch (error) {
    console.log(error);
    const err = { statusCode: 400, message: "something went wrong" };
    next(err);
  }
};

exports.addCommentById=(req,res,next)=>{
    res.send("add comment ticket by id")

};

exports.viewcommentsTicketById=(req,res,next)=>{
    res.send("view comments ticket by id")
}