const route=  require("express").Router();


route.post("/add",function(request, response){
    
    let sno=request.body.sno;
    let name=request.body.name;
    let city=request.body.city;
    let obj={sno:sno,name:name,city:city}
    response.json(obj);
})


module.exports=route;