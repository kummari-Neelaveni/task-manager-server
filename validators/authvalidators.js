const {body,validationResult,header}=require("express-validator");

exports.signupValidator=[
    body("name").isLength({min:3,max:30}).trim().isString().withMessage("requiredname"),
    body("username").isLength({min:3,max:30}).trim().isString().withMessage("requiredUserName"),
    body("email").trim().isLength({min:3,max:40}).isEmail().withMessage("required email"),
    body("password").isLength({min:3,max:30}).trim().isAlphanumeric().withMessage("required passord"),
    
    
    // middleware
//     (req,res,next)=>{
//         const results=validationResult(req);
//         // console.log(results.isEmpty())
//         if(!results.isEmpty()){
//             // return res.status(400).json({message:"validations error", errors:results.errors});
//         const err={
//             statuscode:400,
//             message:"validations error",
//             errors:results.errors,
//         };
//         return next(err);
//         }

//       next()  
        
//     }
 ];

// 
exports.loginValidator=[
body("email").trim().isEmail().withMessage("required email"),
body("password").isString().withMessage("required password"),
// (req,res,next)=>{
//     const results=validationResult(req)
//      if(!results.isEmpty()){
//             // return res.status(400).json({message:"validations error", errors:results.errors});
//         const err={
//             statuscode:400,
//             message:"validations error",
//             errors:results.errors,
//         };
//         return next(err);
//         }
//         next()
// }
    
];
exports.tokenValidator=[
    header("Authorization").isString().withMessage("required token"),
   
]
exports.editProfilevalidator=[
    body("name").optional().isLength({min:3,max:30}).trim().isString().withMessage("requiredname"),
    body("username").optional().isLength({min:3,max:30}).trim().isString().withMessage("requiredUserName"),
    body("email").optional().trim().isLength({min:3,max:40}).isEmail().withMessage("required email"),
    body("password").optional().isLength({min:3,max:30}).trim().isAlphanumeric().withMessage("required passord"),
    
]
exports.validateMiddleware=(req,res,next)=>{
      const results=validationResult(req)
     if(!results.isEmpty()){
            // return res.status(400).json({message:"validations error", errors:results.errors});
        const err={
            statusCode:400,
            message:"validations error",
            errors:results.errors,
        };
        return next(err);
        }
        next()

}
