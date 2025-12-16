var connectiondb=require('../connection/db')
var connectiondb2=require('../connection/db2')
const bcrypt=require('bcrypt');
var Schema=require('../databaseSchema/Schema1')
const mongoose = require('mongoose');

module.exports={

    doSignup:(userData)=>{
    return new Promise(async(resolve,reject)=>{
    userData.password=await bcrypt.hash(userData.password,10)
    const connection= connectiondb2({outputcomment:"Signup",db1info:false,db2info:true})
       const database=connection.db2
      let response={}
      collectionName='userdata';
      const DividData={
        username: userData.username,
        email:userData.email,
        password: userData.password,
        mychannel:"",
        following:"",

      }
      const signData = database.model.collectionName || database.model(collectionName,Schema)  
      const data=await signData.findOne({email:userData.email});
     if(data){
      console.log("exited")
      resolve({status:false})
      
     }else{
      console.log("signup susss")
const user =  new signData(DividData)
user.save(function(err,dataofbase) {
if(err){
reject(err)
}else{
console.log("save dtaa="+dataofbase)
response.data=userData
response.name=userData.username
   response.email=userData.email
response.status=true
resolve(response)
}
});
     }
    
    })
    },
    doLogin:(userData)=>{
      return new Promise(async(resolve,reject)=>{
       const connection= connectiondb2({outputcomment:"Login",db1info:false,db2info:true})
       const database=connection.db2
        mongoose.models={};
        let response={}
        collectionName='userdatas';
        const loginData = database.model.collectionName || database.model(collectionName,Schema)  
        const data=await loginData.findOne({email:userData.email});
        // console.log(data)
        if(data){
          bcrypt.compare(userData.password,data.password).then(async(status)=>{
            if(status){
              console.log("login susss")
              response.data=data
              response.name=data.username
              response.email=data.email
              response.status=true
              resolve(response)
            }else{
              console.log('login flll')
              resolve({status:false})
            }
          })
          
        }else{
          console.log("loginfile")
          resolve({status:false})
         }
      })
    },

   newClass:(userData)=>{
    return new Promise(async(resolve,reject)=>{
      userData.password=await bcrypt.hash(userData.password,10)
      const connection= connectiondb2({outputcomment:"MAINAccounts",db1info:true,db2info:false})
      const database=connection.db1
      // resolve(userData)
       let response={};
        mongoose.models={};
        collectionName='classdata-'+userData.classId;
        collectionName2='profiledata'
        const classData = database.model.collectionName || database.model(collectionName,Schema)
        const ProfileData = database.model.collectionName || database.model(collectionName2,Schema)
        const data=await classData.findOne({classId:userData.classId});
        if(data){
          console.log("class exist")
          resolve({status:false})
        }else{
          const user =  new classData({
            className:userData.className,
            classId: userData.classId,
            email:userData.email,
            password:userData.password, 
            HeaderCode: '#2f3136',
            LeftsideCode: '#666666',
            MSgCode: '#202225',
            MainFondColor: '#ffffff',
            MainbodyCode: '#36393f',
            inputCode: '#41444b',
            MainbodyImage: null,
            Private: true,
            Followvalue:0,
          })
          user.save(function(err,dataofbase) {
            console.log(dataofbase)
          if(err){
          reject(err)
          }else{
           resolve({status:true})
          }
          });
          const user2 =  new ProfileData({
            className:userData.className,
            classId: userData.classId,
            email:userData.email,
            HeaderCode: '#2f3136',
            LeftsideCode: '#666666',
            MSgCode: '#202225',
            MainFondColor: '#ffffff',
            MainbodyCode: '#36393f',
            inputCode: '#41444b',
            Private:true,
            Followvalue:0
          })
          user2.save(function(err,dataofbasestutes) {
          
              console.log("classss"+dataofbasestutes)
          })
        }
    })
   },
   mainClass:(userData)=>{
    return new Promise(async(resolve,reject)=>{
     
      const connection= connectiondb2({outputcomment:"MainClass",db1info:true,db2info:false})
      const database=connection.db1
      mongoose.models={};
      let response={}
      collectionName='classdata-'+userData.classId;
      const mainclass= database.model.collectionName || database.model(collectionName,Schema)  
      const data=await mainclass.findOne({classId:userData.classId});
      const data2=await mainclass.find();
      console.log(data)
      if(data){
        bcrypt.compare(userData.password,data.password).then((status)=>{
          if(status){
            console.log("susss")
         
            
            response.data=data2
            response.data2=data
            response.className=userData.classId
            response.email=data.email
            response.status=true
            resolve(response)
            mongoose.connection.close()
          }else{
            console.log(' flll')
            resolve({status:false})
            mongoose.connection.close()
          }
        })
        
      }else{
        console.log("file")
        resolve({status:false})
        mongoose.connection.close()
       }
    })
   },
   Reload:(userData)=>{
    return new Promise(async(resolve,reject)=>{
     
      const connection= connectiondb2({outputcomment:"Login",db1info:true,db2info:false})
      const database=connection.db1
      mongoose.models={};
      let response={}
      collectionName='classdata-'+userData;
      collectionNameExam='examination-'+userData;
      const mainclass= database.model.collectionName || database.model(collectionName,Schema)
      const Examclass= database.model.collectionNameExam || database.model(collectionNameExam,Schema)    
      let data2=await mainclass.find();
      let examdata=await Examclass.find({ checking: 'question'});
      response.data=data2
      response.exam=examdata
      mongoose.connection.close()
      resolve(response);
    })
   },
   mainAccountsClass:(userData)=>{
    return new Promise(async(resolve,reject)=>{
     
      const connection= connectiondb2({outputcomment:"MAINAccounts",db1info:true,db2info:false})
      const database=connection.db1
      mongoose.models={};
      let response={}
      collectionName='classdata-'+userData.classId;
      const mainclass= database.model.collectionName || database.model(collectionName,Schema)  
      const data=await mainclass.findOne({classId:userData.classId});
      const data2=await mainclass.find();
      
      if(data){
        response.data2=data
            response.data=data2
            response.className=userData.classId
            // response.email=data.email
            response.status=true
            // mongoose.connection.close()
            resolve(response)
        
      }else{
        console.log("file")
        // mongoose.connection.close()
        resolve({status:false})
       }
    })
   },

   dbb:async(userData)=>{
    const connection= connectiondb2({outputcomment:"dbb",db1info:false,db2info:true})
    const database=connection.db2
    mongoose.models={};
    let response={}
    collectionName='userdatas';
    const User= database.model.collectionName || database.model(collectionName,Schema)  
    const channelData = await User.findOne({email:userData.email});
    channelData.mychannel +=userData.classId+"/"
    await channelData.save();
       
   }
   
}




