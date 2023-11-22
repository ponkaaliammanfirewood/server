
const mongoose=require("mongoose")
const company= mongoose.Schema({
    name:String
})

module.exports=mongoose.model("company",company)