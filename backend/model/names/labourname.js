
const mongoose=require("mongoose")
const labour= mongoose.Schema({
    name:String
})

module.exports=mongoose.model("labourname",labour)