const express = require('express')
const app = express()
const port = 3001
const dbConnect =require('./config/dbConnect.js')
const authRoutes =require('./routes/authRoutes.js')
const userRoutes=require('./routes/userRoutes.js')
dbConnect();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/auth",authRoutes)
app.use("/users",userRoutes)

app.get('/',(req,res)=>{
  res.send("welcome in RoleBased");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})