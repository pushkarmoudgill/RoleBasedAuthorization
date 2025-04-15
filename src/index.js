const express = require('express')
const app = express()
const port = 3001
const dbConnect =require('./config/dbConnect.js')

dbConnect();




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})