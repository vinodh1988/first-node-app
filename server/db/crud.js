const connect=require('./connection')


const crudOperations={

   addPerson: function(person,callback){
       connect.query("insert into person values(?,?,?)",
       [person.sno,person.name,person.city],callback);
    }
    ,
    getAll: function(callback){
       connect.query("select * from person",callback);
    }


}

module.exports=crudOperations;