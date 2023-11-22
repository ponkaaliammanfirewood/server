
const mongoose=require("mongoose")
const broker= mongoose.Schema({
    name:String
})

module.exports=mongoose.model("broker",broker)