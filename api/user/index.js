var express=require('express')
var router=express.Router()
var userController=require('./controller.user')
router.get('/:userId',userController.getUserData)
module.exports=router