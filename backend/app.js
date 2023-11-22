require("dotenv").config()
const express=require('express');
const app=express();
 const cors=require("cors")
const bodyParser=require('body-parser')
app.use(express.json());
app.use(cors())
const router=require('./routes/routes')
const db=require("./configs/db")

app.use(bodyParser.urlencoded({extended:true}))

app.use("/",router)
db
app.listen(process.env.PORT,function(){
    console.log(`server running at ${process.env.PORT}`)
})