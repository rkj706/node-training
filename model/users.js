var mongoose=require('../mongodb')
var Schema=mongoose.Schema;
let userSchema=new Schema({
    userName:{type:String},
    password:{type:String},
    address:{type:String},
    age:{type:Number}
})
var User=mongoose.model('User',userSchema);
module.exports=User
