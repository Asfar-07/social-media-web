var connectiondb=require('../connection/db')
var connectiondb2=require('../connection/db2')
var Date=require('../Time-Date/Datecreation')
var Schema=require('../databaseSchema/Schema1')
const mongoose = require('mongoose');

 
   let anotherfunction=(msg)=>{
      
    
              return new Promise(async(resolve,reject)=>{
                
                const connection= connectiondb2({outputcomment:"Message",db1info:true,db2info:false})
                const database=connection.db1
      // console.log(msg)
  
      console.log(typeof user_email)
    const { text } = msg.message;
    if(msg.imagedata){
      var  {path} = msg.imagedata;
      var {originalname}=msg.imagedata;
    }else{
      var path = ""; 
    }
      
     
        mongoose.models={};
       
        var currecttime=Date.Alldate()
        console.log(currecttime)
        let response={}
        collectionName='classdata-'+msg.classname;
        const classData =database.model.collectionName ||database.model(collectionName,Schema)
      
        const user =  new classData({
        message:text,
        user_email:msg.useremail,
        Image:path,
       originalname:originalname,
       createtime:currecttime
        
              })
              if(msg.message&&msg.username||msg.Image) {
                user.save(function(err,dataofbase) {
                  if(err){
                  reject(err)
                  }else{
                    console.log('data saved  '+dataofbase)
                    resolve("ok")
                  }
                  }); 
              }else{
                console.log("no data")
              }
      })
      }
      module.exports=anotherfunction;