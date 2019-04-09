var fs=require('fs')
// error first callback
var result=fs.readFileSync('./untitled.txt')
//console.log(result.toString())
fs.readFile('./untitled.txt',function(err,result){
    if(err){
        console.log(err)
    }else{
        console.log(result.toString())
    }
})
//console.log('called before readFIle')

var bookData=fs.createReadStream('./book.txt')

bookData.on('data',function(chunk){
    console.log(chunk.toString())
})
bookData.on('error',function(){

})
bookData.on('finish',function(){
    console.log('finisheed data readingn')
})
