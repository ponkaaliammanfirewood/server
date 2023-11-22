
const mongoose=require("mongoose")
const suitAmount= mongoose.Schema({
    date:String,
    giver:String,
    receiver:String,
    amount:Number,

})

module.exports=mongoose.model("suitAmount",suitAmount)