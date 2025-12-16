var connectiondb=require('../connection/db')
const bcrypt=require('bcrypt');
const e = require('express');
var express = require('express');
var Schema=require('../databaseSchema/Schema1')
const mongoose = require('mongoose');
const createdate=require('../Time-Date/Datecreation')

module.exports={
    MainExam:(userData)=>{
        return new Promise(async(resolve,reject)=>{
          const examdata=userData.data
          connectiondb("classdata")
          Time=examdata.Time
    const responseDate=await createdate.examdate(Time);
          mongoose.models={};
          let response={}
          const ramdomName=Math.round(Math.random()*1000)
          const Examname=examdata.Examname+ramdomName
          const seperatetime=await createdate.timeseperate(responseDate.addtime)
          // console.log(seperatetime.time)
          collectionName='examination-'+userData.classname;
          const mainExam= mongoose.model.collectionName || mongoose.model(collectionName,Schema) 
          const user =  new mainExam({
             qs1:examdata.qs1,
          mark1: examdata.mark1,
          qs2: examdata.qs2,
          mark2: examdata.mark2,
          qs3: examdata.qs3,
          mark3: examdata.mark3,
          qs4: examdata.qs4,
          mark4: examdata.mark4,
          qs5: examdata.qs5,
          mark5: examdata.mark5,
          Time: examdata.Time,
          ansname:ramdomName,
          Examname:Examname,
          checking:"question",
          createtime:responseDate.currecttime,
          addtime:seperatetime.time,
          adddate:seperatetime.date,
          am_pm:seperatetime.am_pm,

        })
          user.save(function(err,dataofbase) {
            if(err){
            reject(err)
            }else{
              console.log('data saved  '+dataofbase)
            
            // mongoose.connection.close()
      
            }
            });
          
        })
    
       },
       
    Qustions:(userData)=>{
        return new Promise(async(resolve,reject)=>{
            connectiondb("classdata")
            mongoose.models={};
            let response={}
            const classid=userData.classinfo
            const realdata=userData.realdata
            collectionName="examination-"+classid.classId;
            const Examclass= mongoose.model.collectionName || mongoose.model(collectionName,Schema) 
            let data=await Examclass.find({ checking: 'question',Examname:realdata.Examname});
            // const data=await mainExam.find({Examname:realdata.Examname,checking: 'studentans'});  
            response.data=data
            console.log(data)
            resolve(response);
      mongoose.connection.close()
        })
       },
       UserExam:(userData)=>{//function called in app.js
        return new Promise(async(resolve,reject)=>{
            connectiondb("classdata")
          
       console.log(userData)
            const classid=userData.classinfo
            const realdata=userData.realdata
            const userid=userData.userid
            console.log(realdata)
            const responseDate=await createdate.Alldate()
            const Time=userid.date+" "+userid.time+" "+userid.am_pm
           const timedilay=await createdate.checktime(Time)
           console.log(timedilay)
            mongoose.models={};
            let response={}
            collectionName="examination-"+classid.classId;
            const mainExam= mongoose.model.collectionName || mongoose.model(collectionName,Schema) 
            const user =  new mainExam({
                ans1:realdata.ans1,
                ans2:realdata.ans2, ans3:realdata.ans3, ans4:realdata.ans4,ans5:realdata.ans5,
                Examname:userid.Examname,
                IdNumber:userid.Idnumber,
                createtime:responseDate,
                checking:"studentans",
                AtTime:timedilay
            })
            user.save(function(err,dataofbase) {
                if(err){
                reject(err)
                }else{
                  console.log('data saved  '+dataofbase)
                
              
          
                }
                });
        })
      
       },
       Answer:async(userData)=>{
        return new Promise(async(resolve,reject)=>{
        connectiondb("classdata")
        mongoose.models={};
        let response={}
        console.log(userData)
        const classid=userData.classinfo
        const realdata=userData.realdata
        collectionName="examination-"+classid.classId;
        const Examclass= mongoose.model.collectionName || mongoose.model(collectionName,Schema) 
        const data=await Examclass.find({Examname:realdata.Examname,checking: 'studentans'});  
        response.data=data
  mongoose.connection.close()
  resolve(response)
        })
       },
       AnswerMark:(userData)=>{
        console.log(userData)
        const data=userData.realdata 
        classid=userData.classinfo
        connectiondb("classdata")
        mongoose.models={};
        collectionName="examination-"+classid.classId;
        const YourModel= mongoose.model.collectionName || mongoose.model(collectionName,Schema) 
        const query = { 
          checking:"studentans",
          IdNumber:data.IdNo }; // Replace with your query criteria
const update = { TotalMark: data.Mark }; // Replace with the fields you want to update

YourModel.findOneAndUpdate(
  query,
  update,
  { new: true }, // This option returns the updated document
  (err, updatedDocument) => {
    if (err) {
      console.error('Error updating document:', err);
    } else {
      console.log('Document updated:', updatedDocument);
    }
  }
);

       }
}