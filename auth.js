function verifyRequest(req,res,next){
    // Bearer 3123dsdJG34Jhjjssj
    let token=req.header('Authorization').split(' ')[1]
    if(token=='3123dsdJG34Jhjjssj'){
        next()
    }else{
        res.status(401).json({message:"wrong credentials"})
    }
}
module.exports={
    verifyRequest:verifyRequest 
}