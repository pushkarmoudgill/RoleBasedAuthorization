
const express=require("express")

const {verifyToken}=require("../middlewares/authMiddleware.js")
const {authorizeRole}=require("../middlewares/roleMiddleware.js")

const router =express.Router();



//only admin can access

router.get("/admin", verifyToken,authorizeRole("user"),(req,res)=>{
    res.json({message:"Welcome Admin"})
})

//Both admin and manager can access
router.get("/manager",authorizeRole("admin","manager"), (req,res)=>{
    res.json({message:"Welcome Manager"})
})

//All can access

router.get("/user",authorizeRole("admin","manager","user"),(req,res)=>{
    res.json({message:"Welcome User"})
})


module.exports=router;