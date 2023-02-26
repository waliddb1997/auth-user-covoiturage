const {check, validationResult}=require("express-validator");
exports.regiterRules=()=>
    [
        check("name","Name is required").notEmpty(),
        check("lastName","lastName is required").notEmpty(),
        check("email","email is required").notEmpty(),
        check("email","check email again").isEmail(),
        check("password","password is required").isLength({
            min:6,
            max:20

        }),


        
    ]



exports.loginRules=()=>
    [
        
        check("email","email is required").notEmpty(),
        check("email","check email again").isEmail(),
        check("password","password must be between 6 characters and 8 charakter ").isLength({
            min:6,
            max:20

        }),


        
    ]




exports.validation=async(req,res,next)=>{
 const   error=validationResult(req);
    if (!error.isEmpty()){
        return res.status(400).send({error:error.array().map(el=>({msg:el.msg}))});

    }
    next();
    


}