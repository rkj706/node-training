var events=require('events')
var  EventEmitter =new  events.EventEmitter()

EventEmitter.on('connection',function(data){
    console.log(data)
    console.log('connection made')
})

EventEmitter.emit('connection',{data:"Dasd"})