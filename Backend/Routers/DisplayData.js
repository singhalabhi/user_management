const express = require('express')
const router=express.Router();

router.post('/userData',(req,res)=>{
    try{
        res.send([global.userData])
    }
    catch(error){
        console.log(error.message)
        res.send("Server Error");
    }
})

module.exports=router;
