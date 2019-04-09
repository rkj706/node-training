const  mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb');
var db = mongoose.connection;
db.on('error', function () {
    throw new Error('unable to connect to database at ');
})
module.exports=mongoose;
