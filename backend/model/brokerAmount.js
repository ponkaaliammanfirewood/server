
const mongoose=require("mongoose")
const brokerAmount= mongoose.Schema({
    date:String,
    giver:String,
    receiver:String,
    amount:Number,

})

module.exports=mongoose.model("BrokerAmount",brokerAmount)