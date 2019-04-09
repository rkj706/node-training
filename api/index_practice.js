var express=require('express')
var router=express.Router()
//rest response code: 200 400 202 401 404
//params querystring body

router.get('/',function(req,res){
    let name=req.query.name || ''
    let id=req.query.id || ''
    let responseMessage="got a request from "+name + " id is "+id
    res.status(200).json({message:responseMessage})
  //  res.send('response from get api')
})

router.put('/',function(){

})
router.get('/:id',function(req,res){
    let paramValue=req.params.id
    res.status(200).json({message:"your id is "+paramValue})
})

router.post('/saveData',function(req,res){
   let body= req.body
   console.log(body)
    res.status(200).json({message:"your data has been saved !"})
})

router.post('/',function(req,res){
   // res.send('response from post api')
   res.status(200).json({message:"response from get api"})
})

module.exports=router