const fs=require("fs")
const data=require('./second');


console.log(data.app);
data.fun()
console.log(data.names);
data.onemore();

fs.readFile("package.json","utf-8",function(err,data){
    if(err)
         console.log("Error reading file")
    else
        console.log(data);
})

console.log("First line ");
console.log("second line");

/*
       Node JS is a single threaded program 
       It uses event based approach
       Node Js is Non-blocking and asynchronous


       file f=new file("x.txt")
      result= f.readFile(bytes);  (it takes time and waits....) 300ms  -- Blocking/ synchronous
       //execution wont move to the next line...
       result+x;

       asynchronous approach

       fs.readFile(tempfile, function(){
           sdks;fksdffsd
       });

       //code after
       x+ logic // will execute even before the file is read

*/


