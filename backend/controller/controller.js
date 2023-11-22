const express=require('express');
const app=express();
const allSchema=require("../model/allschema")
const labourAmount=require('../model/labourAmount')
const labourAmount1=require('../model/labourAmount1');
const company = require('../model/names/companyname');
const labour = require('../model/names/labourname');
const broker=require('../model/names/brokername');
const brokerAmount = require('../model/brokerAmount');
const companyname = require('../model/names/companyname');
const allschema = require('../model/allschema');
const suitAmount=require('../model/suitschema');
const type = require('../model/typeschema');

const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth()+1);
const day = String(currentDate.getDate());
let formattedDate='';

exports.add=async(req,res)=>{
    if(req.body.selectedDate===''){
        formattedDate = `${day}-${month}-${year}`;
   }
   else{
    const [year, month, day] = req.body.selectedDate.split("-");
     formattedDate = `${day}/${month}/${year}`;
   }
   if(req.body.labname===''||req.body.companyname===''||req.body.brokername===''||req.body.ton===''||req.body.location===''){
    res.json({message:"all feilds are required"})
   }
   else{
    const all=await allSchema.create({
        labname:req.body.labname,
        companyname:req.body.companyname,
        brokername:req.body.brokername,
        ton:Number(req.body.ton),
        date:formattedDate,
        location:req.body.location,
        paytolabour:req.body.paytolabour,
        paytobroker:req.body.paytobroker,
        type:req.body.type,


    }).then((all)=>{
        res.json({message:"success"})
    })
    .catch((error)=>{
        console.log(error)
    })
   }
}

exports.cash=async(req,res)=>{
    if(req.body.selectedDate===''){
        formattedDate = `${day}-${month}-${year}`;
   }
   else{
    const [year, month, day] = req.body.selectedDate.split("-");
     formattedDate = `${day}/${month}/${year}`;
   }
   const cash=await labourAmount.create(
    {
        date:formattedDate,
    giver:req.body.sender,
    receiver:req.body.receiver,
    amount:req.body.amount,
    }
   )
   .then(()=>{
    res.json({message:"success"})
   })
   .catch((error)=>{
    console.log(error)
})
}


exports.online=async(req,res)=>{
    if(req.body.selectedDate===''){
        formattedDate = `${day}-${month}-${year}`;
   }
   else{
    const [year, month, day] = req.body.selectedDate.split("-");
     formattedDate = `${day}/${month}/${year}`;
   }
   const cash=await labourAmount1.create(
    {
        date:formattedDate,
    sender:req.body.sender,
    receiver:req.body.receiver,
    amount:req.body.amount,
   
    }
   )
   .then(()=>{
    res.json({message:"success"})
   })
   .catch((error)=>{
    console.log(error)
})
}
exports.names=async(req,res)=>{
    const companyname=await company.find()
    const labourname=await labour.find()
    const brokername= await broker.find()
    const typename=await type.find()

    res.json({companyname:companyname,labourname:labourname,brokername:brokername,typename:typename})
}
exports.tons=async(req,res)=>{

    const ton=await allSchema.find({labname:req.body.labname}).sort({ date: 1 });
   const data= ton.map((ton)=> {return({date:ton.date,location:ton.location,broker:ton.brokername,ton:ton.ton,payment:ton.paytolabour,id:ton._id,type:ton.type})}) 
   const total=ton.map((ton)=>{return ton.ton})
   const sum = total.reduce((acc, currentValue) => Number(acc) + Number(currentValue), 0);
      res.json({data,sum})
}
exports.paytolabour=async(req,res)=>{

    const id=req.params.id
    const paytolabour=req.body.paytolabour
    const update= await allSchema.findByIdAndUpdate({_id:id},{paytolabour:paytolabour}).then(()=>res.json({message:"success"}))
}

exports.brokerton=async(req,res)=>{
    const ton=await allSchema.find().sort({ date: 1 });
   const data= ton.map((ton)=> {return({date:ton.date,location:ton.location,broker:ton.brokername,labour:ton.labname,ton:ton.ton,payment:ton.paytobroker,id:ton._id,company:ton.companyname})}) 
   res.json(data)
}
exports.brokertons=async(req,res)=>{

    const ton=await allSchema.find({brokername:req.body.brokername}).sort({ date: 1 });
   const data= ton.map((ton)=> {return({date:ton.date,location:ton.location,broker:ton.brokername,labour:ton.labname,ton:ton.ton,payment:ton.paytobroker,id:ton._id,company:ton.companyname,type:ton.type})}) 
   res.json(data)
}
exports.brokeramount=async(req,res)=>{
    const amount= await brokerAmount.find({receiver:req.body.brokername}).sort({ date: 1 });
    res.json(amount)
}
exports.paytobroker=async(req,res)=>{
    const id=req.params.id
    const paytobroker=req.body.paytobroker
    const update= await allSchema.findByIdAndUpdate({_id:id},{paytobroker:paytobroker}).then(()=>res.json({message:"success"}))
}

exports.viewamount=async(req,res)=>{
    const cash=await labourAmount.find().sort({ date: 1 });
    const online= await labourAmount1.find().sort({ date: 1 });
     res.json({cash:cash,online:online})
}
exports.viewamount1=async(req,res)=>{
    const cash=await brokerAmount.find().sort({ date: 1 });
     res.json(cash)
}

exports.brokercash=async(req,res)=>{
    if(req.body.selectedDate===''){
        formattedDate = `${day}-${month}-${year}`;
   }
   else{
    const [year, month, day] = req.body.selectedDate.split("-");
     formattedDate = `${day}/${month}/${year}`;
   }
   const cash=await brokerAmount.create(
    {
        date:formattedDate,
    giver:req.body.sender,
    receiver:req.body.receiver,
    amount:req.body.amount,
    }
   )
   .then(()=>{
    res.json({message:"success"})
   })
   .catch((error)=>{
    console.log(error)
})
}
exports.labourton=async(req,res)=>{
    const ton=await allSchema.find().sort({ date: 1 });
    const data= ton.map((ton)=> {return({date:ton.date,location:ton.location,broker:ton.brokername,labour:ton.labname,ton:ton.ton,payment:ton.paytolabour,id:ton._id,company:ton.company})}) 
   res.json(data)
}
exports.companytons=async(req,res)=>{
    const company = await allschema.find().sort({ date: 1 });
    const data= company.map((ton)=> {return({date:ton.date,broker:ton.brokername,ton:ton.ton,id:ton._id,company:ton.companyname})}) 
    res.json(data)
}
exports.companyton=async(req,res)=>{
    const company= await allSchema.find({companyname:req.body.companyname}).sort({ date: 1 });
    const data= company.map((ton)=> {return({date:ton.date,broker:ton.brokername,ton:ton.ton,id:ton._id,company:ton.companyname,type:ton.type})}) 
    res.json(data)
}

exports.deleteitem=async(req,res)=>{
    const upadate=await brokerAmount.find({_id:req.params.id}).then(async(result)=>{
result.map(async(result)=>{
    await suitAmount.create({
        date:result.date,
        giver:result.giver,
        receiver:result.receiver,
        amount:result.amount
    })
})
        
    }
    )
    const deletei=await brokerAmount.findByIdAndDelete({_id:req.params.id}).then(async()=>{
        const cash=await brokerAmount.find().sort({ date: 1 });
     res.json(cash)
    })
}
