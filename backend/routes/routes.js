const controller =require('../controller/controller')
const express=require('express')
const router=express.Router()

router.post('/add',controller.add)
router.post('/cash',controller.cash)
router.post('/online',controller.online)
router.get('/names',controller.names)
router.post('/labourton',controller.tons)
router.get('/labourton1',controller.labourton)
router.put("/updatepaytolabour/:id",controller.paytolabour)
router.post('/brokerton',controller.brokertons)
router.get('/brokerton1',controller.brokerton)
router.put("/updatepaytobroker/:id",controller.paytobroker)
router.get("/viewamount",controller.viewamount)
router.get("/viewamount1",controller.viewamount1)
router.post('/brokercash',controller.brokercash)
router.post('/brokeramount',controller.brokeramount)
router.post('/companyton',controller.companyton)
router.get('/companyton1',controller.companytons)
router.delete('/delete/:id',controller.deleteitem)
module.exports=router