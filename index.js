var http=require('http')
var express=require('express')
var bodyParser=require('body-parser') //npm install body-parser --save
var app=new express()


app.use(bodyParser.json())
var server=http.createServer(app,function(req,res){
    console.log('came here')
    res.end("hello")
})

require('./router')(app)
server.listen(5000,function(err){
    if(err){
        console.log("error while creating server")
    }else{
        console.log('running on PID '+process.pid)
    }
})
