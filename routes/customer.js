const express=require('express')
const router=express.Router()
const customerController =require('../controllers/customer.controller')
router.get("/",customerController.getCustomerByPagination)
module.exports=router

