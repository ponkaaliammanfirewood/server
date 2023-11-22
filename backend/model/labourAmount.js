
const mongoose=require("mongoose")
const labourAmount= mongoose.Schema({
    date:String,
    giver:String,
    receiver:String,
    amount:Number,

})

module.exports=mongoose.model("labourAmount",labourAmount)