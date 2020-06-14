const express=require('express')
const app=express()
const path=require('path')
const person=require('./server/routes/person')
const bodyParser=require('body-parser');

app.use(express.static(path.join(__dirname,'client/css')));
app.use(express.static(path.join(__dirname,'client/js')));
app.use(express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')))
app.use(express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')))
app.use(express.static(path.join(__dirname,"node_modules/jquery/dist")))

app.use(bodyParser.urlencoded())  //to parse incoming request which is in url encoded format

app.use("/person",person);

app.get('/',function(request,response){
     response.send("Express APP is working...!!!!!");
})

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,'client/html/index.html'));
})
app.listen('4050',function(){
     console.log("The server is started and running on port number 4050")
})