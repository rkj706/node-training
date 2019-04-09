const User=require('../../model/users')

function saveUserDataPromise(body){
    return new Promise(function(resolve,reject){
        let user=new User()
        user.userName=body.userName
        user.password=body.password
        user.address=body.address
        user.age=body.age
        user.save(function(err,result){
            if(err){
                reject(err)
            }else{
                resolve('saved')
            }
        }) 
    })
}
function checkIfUserExist(userName){
    return new Promise(function(resolve,reject){
        User.findOne({userName:userName},function(err,result){
            if(err){
                    reject(err)
            }else if(result){
                reject({message:"userName already exist"})
            }else{
                resolve("all good")
            }
        })
    })    
    
}



// async await
async function saveUserData(req,res){
    let body=req.body;
    // try{
    // let response=  await checkIfUserExist(body.userName)
    // let userSavedReponse= await saveUserDataPromise(body)
    // res.status(200).json({message:"user saved"})    
    // }
    // catch{
    //     res.status(500).json({message:"Internal"})  
    // }

    checkIfUserExist(body.userName)
    .then(function(result){
        saveUserDataPromise(body).then(function(){
            res.status(200).json({message:saved})
        })
        .catch(function(error){
            console.log(error)
            res.status(500).json({message:"internal Error"})
        })
    }).catch(function(message){
        res.status(500).json(message)
    })


}

function getUserData(req,res){
let userId=req.params.userId
res.status(200).json({message:"data"})
}
module.exports={
getUserData:getUserData,
saveUserData:saveUserData
}