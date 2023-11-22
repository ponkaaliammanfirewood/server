
const mongoose=require("mongoose")
const allSchema= mongoose.Schema({
    date:String,
    location:String,
    companyname:String,
    ton:String,
    brokername:String,
    labname:String,
    paytolabour:String,
    paytobroker:String,
    type:String,
})

module.exports=mongoose.model("TON",allSchema)
