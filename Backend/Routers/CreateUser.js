const express=require('express')
const router=express.Router()
const User=require('../Models/user');
const { body, validationResult } = require('express-validator');
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const jwtSecret="mypopisotwellasheshouldbepasswordisnotnull"

router.post("/createuser",[
    body('name').isLength({min:3}),body('password','Password should be min 8 characters').isLength({min:8}),body('email',).isEmail(),body('phone').isLength({min:3})]
    ,async (req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const salt=await bcrypt.genSalt(10);
    const securedpassword=await bcrypt.hash(req.body.password,salt)
    try {
        await User.create({
            name:req.body.name,
            email:req.body.email,
            password:securedpassword,
            phone:req.body.phone
        }).then(res.json({success:true}))
    }
     catch (error) {
        console.log(error)
        res.json({success:false});
    }
})



module.exports=router;