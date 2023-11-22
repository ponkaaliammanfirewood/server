
const mongoose=require("mongoose")
const labourAmount1= mongoose.Schema({
    date:String,
    sender:String,
    receiver:String,
    amount:Number,
})

module.exports=mongoose.model("labourAmountonline",labourAmount1)