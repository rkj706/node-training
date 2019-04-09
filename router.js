module.exports=(app)=>{
    app.use('/api',require('./api'))
    app.use('/',landingPage)   
}
//localhost:5000/api
function landingPage(req,res){
    res.send('welcome to my page')
}
