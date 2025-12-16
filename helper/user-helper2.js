var connectiondb=require('../connection/db')
var connectiondb2=require('../connection/db2')
const bcrypt=require('bcrypt');
const e = require('express');
var express = require('express');
const mongoose = require('mongoose');
var Schema=require('../databaseSchema/Schema1')

module.exports={
    Follow:(userData)=>{
        return new Promise(async(resolve,reject)=>{
          console.log(userData.FollowOR)
          const classinfo=userData.classinfo
         const useremail=userData.useremail
         const connection= connectiondb2({outputcomment:"checkfollow",db1info:false,db2info:true})
          const database=connection.db2
              mongoose.models={};
              let response={}
              collectionName2='userdatas';
              const folowdata = database.model.collectionName2 || database.model(collectionName2,Schema)
              const userfollowing=await folowdata.findOne({email:useremail.email})

              if(userData.FollowOR){
                userfollowing.following +=classinfo.classId+"/"
               await userfollowing.save()
        
        }else{
          var repvalue=classinfo.classId+"/"
        var element= userfollowing.following.replace(repvalue,"")
        userfollowing.following=element
         await userfollowing.save()
        }
        })
       },
       CheckFollow:(userData)=>{
        return new Promise(async(resolve,reject)=>{
          const connection= connectiondb2({outputcomment:"checkfollow",db1info:false,db2info:true})
          const database=connection.db2
              mongoose.models={};
              let response={}
              const userdata=userData.userdata
              collectionName2='userdatas';
              const loginData2 = database.model.collectionName2 || database.model(collectionName2,Schema)
              const followchannel=await loginData2.findOne({email:userdata.email});  
              console.log(followchannel.following)
              const element=followchannel.following
              if (element.includes(userData.classid)) {
                response.followdata=true
            } else {
              response.followdata=false
            }
            //response.followdata=followchannel
            //response.ALL_followingdata=ALL_followingdata
            resolve(response);
            
            
         })
       },
       AccountInfo:(userData)=>{
        return new Promise(async(resolve,reject)=>{
          const connection= connectiondb2({outputcomment:"accountInfo",db1info:false,db2info:true})
          const connection2= connectiondb2({outputcomment:"accountInfo",db1info:true,db2info:false})
          const database=connection.db2
          const database2=connection2.db1
              // console.log(userData)
              mongoose.models={};
              let response={}
              collectionName1='profiledatas';
            collectionName2='userdatas';
            const loginData2 = database.model.collectionName2 || database.model(collectionName2,Schema)
            const loginData1 = database2.model.collectionName1 || database2.model(collectionName1,Schema)
            const userInfo=await loginData2.findOne({email:userData.email});  
            var Ourchannelelement=userInfo.mychannel.split('/')
            var Followchannelelement=userInfo.following.split('/')
            console.log(Ourchannelelement)
            var FinalMychaneldata=[]
            var FinalFollowchaneldata=[]
            for (let i = 0; i < Ourchannelelement.length-1; i++) {
              const userInfo=await loginData1.findOne({classId:Ourchannelelement[i]});  
              FinalMychaneldata[i]=userInfo
              
            }
            for (let i = 0; i < Followchannelelement.length-1; i++) {
              const userInfo=await loginData1.findOne({classId:Followchannelelement[i]});  
              FinalFollowchaneldata[i]=userInfo
              
            }
            // console.log(FinalMychaneldata)
            response.mychannel=FinalMychaneldata
            response.following=FinalFollowchaneldata
            resolve(response)
        })
       },
       Update_Profile:(userData)=>{
    
        const data=userData.Real_data
        const classid=userData.classname
        const connection= connectiondb2({outputcomment:"update_profile",db1info:true,db2info:false})
        const database=connection.db1
        mongoose.models={};
        collectionName="classdata-"+classid;
        collectionName2="profiledatas";
        const MainPart= database.model.collectionName || database.model(collectionName,Schema) 
        const AnotherPart= database.model.collectionName || database.model(collectionName2,Schema) 
        const query = { 
          classId:classid,
           }; // Replace with your query criteria
           let update;
           if(data.imgsrc){
              update = { ProfileImage:data.imgsrc}
              UpdateProfile()
           }
           if(data.name){
            update = { className:data.name}
            UpdateProfile()
           }
           if(data.feature){
            update={ feature:data.feature}
            UpdateProfile()
           }
           function UpdateProfile(){
            MainPart.findOneAndUpdate(
              query,
             update,
              { new: true }, // This option returns the updated document
              (err, updatedDocument) => {
                if (err) {
                  console.error('Error updating document:', err);
                } else {
                  console.log('Document updated:');
                }
              }
            );
            AnotherPart.findOneAndUpdate(
              query,
             update,
              { new: true }, // This option returns the updated document
              (err, updatedDocument) => {
                if (err) {
                  console.error('Error updating document:', err);
                } else {
                  console.log('Document updated:');
                }
              }
  
  );
           }
           
       },
       Update_color:(ColorData,Classid)=>{
        // console.log(ColorData.Imgdata)
        const connection= connectiondb2({outputcomment:"update_Color",db1info:true,db2info:false})
        const database=connection.db1
        mongoose.models={};
        collectionName="classdata-"+Classid;
        const YourModel= database.model.collectionName || database.model(collectionName,Schema) 
        const query = { 
          classId:Classid,
           }; // Replace with your query criteria
const update = { 
  HeaderCode:ColorData.colorcode[0].color1,
  LeftsideCode:ColorData.colorcode[1].color1,
  MainbodyCode:ColorData.colorcode[2].color1,
  inputCode:ColorData.colorcode[3].color1,
  MSgCode:ColorData.colorcode[4].color1,
  MainFondColor:ColorData.colorcode[5].color1,
  MainbodyImage:ColorData.Imgdata
}
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
       },
       ChangePrivate:(UsreData,Classdata)=>{
        console.log(UsreData,Classdata)
        const connection= connectiondb2({outputcomment:"Change_private",db1info:true,db2info:false})
        const database=connection.db1
        mongoose.models={};
        collectionName="classdata-"+Classdata;
        collectionName2="profiledatas";
        const YourModel= database.model.collectionName || database.model(collectionName,Schema) 
        const AnotherPart= database.model.collectionName || database.model(collectionName2,Schema) 
        const query = { 
          classId:Classdata,
           }; // Replace with your query criteria
const update = { 
Private:UsreData.PickedValue
}
YourModel.findOneAndUpdate(
  query,
  update,
  { new: true }, // This option returns the updated document
  (err, updatedDocument) => {
    if (err) {
      console.error('Error updating document:', err);
    } else {
      console.log('Document updated:');
    }
  }
);
AnotherPart.findOneAndUpdate(
  query,
 update,
  { new: true }, // This option returns the updated document
  (err, updatedDocument) => {
    if (err) {
      console.error('Error updating document:', err);
    } else {
      console.log('Document updated:');
    }
  }
);
       }

}