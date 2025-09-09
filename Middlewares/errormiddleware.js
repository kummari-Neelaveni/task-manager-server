const errorhandler=(err,req,res,next)=>{
    console.log(err);
    res.status(err.statusCode||500)
    .json({message:err.message,
        errors:err.errors
    });
}
module.exports={errorhandler}