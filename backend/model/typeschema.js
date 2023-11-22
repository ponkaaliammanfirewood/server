
const mongoose=require("mongoose")
const type= mongoose.Schema({
    type:String

})

module.exports=mongoose.model("type",type)