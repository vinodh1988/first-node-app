var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'password',
database:'nodebatch'

});


module.exports=connection;