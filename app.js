var http=require('http')
var express=require('express')
//var app=new express()
var server=http.createServer(function(req,res){
    console.log('came here')
    res.end("hello")
})

server.listen(5000,function(err){
    if(err){
        console.log("error while creating server")
    }else{
        console.log('running on PID '+process.pid)
    }
})
