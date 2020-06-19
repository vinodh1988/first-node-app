const route=  require("express").Router();
const crud= require('../db/crud');

route.post("/add",function(request, response){
    
    let sno=request.body.sno;
    let name=request.body.name;
    let city=request.body.city;
    let obj={sno:sno,name:name,city:city}
    crud.addPerson(obj,function(err,data){
        if(err)
          response.send(500);
        else
          response.send("Data inserted successfully")
    })
})

route.get("/getall",function(request,response){
     crud.getAll(function(err,data){
         if(err)
           response.send(500);
         else
           response.render("people",{people:data})
     })
});

module.exports=route;