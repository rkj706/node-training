
function getUserData(req,res){
let userId=req.params.userId
res.status(200).json({message:"data"})
}
module.exports={
getUserData:getUserData
}