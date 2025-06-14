const bcrypt =require("bcryptjs");
const jwt =require("jsonwebtoken");
const User=require("../models/userModel.js")
require("dotenv").config();

const register=async(req,res)=>{

const {username,password,role,salary,department}=req.body;
const hashedPassword=await bcrypt.hash(password,10)


const newUser=new User({username, password: hashedPassword, role , salary,department});

await newUser.save();

res.status(201).json({message: `User registered with ${username}`})

};


const login=async(req,res)=>{
     
    try{

    
    const {username,password}=req.body;

    const user = await User.findOne({username})

    if(!user){
        res.status(404).json({
         message :  "User not found"
        })
    }
    console.log("userrr",user.password)
     const isMatch=await bcrypt.compare(password,user.password)
      console.log("Ismatch",isMatch)
     if(!isMatch){
        return res.status(400).json({message:`Invalid credentails`})
     }
     console.log("token creating")
     const token =jwt.sign({
        id: user._id,
        role: user.role
     },
     process.env.SECRET_KEY,
     { expiresIn :"1h"}
    )
       console.log("token created")
     res.status(200).json({ token

     })
    }
    catch(err){
        res.status(500).json({message:"something went wrong!"})
    }
};


module.exports={
    register,login,
};