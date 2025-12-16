var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const anotherfunction=require('../helper/classhelper');
const userhelper=require("../helper/user-helper")
const userhelper2=require("../helper/user-helper2")
const userhelper3=require("../helper/get-function")



router.get('/',async function (req, res, next) {
 var response2;
 var All_fOLowdata;
 var ListVideo;
 if(req.session.data){
  response2=await userhelper2.CheckFollow({classid:req.session.className,userdata:req.session.data});
 }
  var followdata=response2.followdata
  const response=await userhelper.Reload(req.session.className);
  if(req.session.data){
  await userhelper3.convertime({data:response.data,userdata:req.session.data});
  await userhelper3.Find_userNAme({data:response.data,userdata:req.session.data});
  All_fOLowdata=await userhelper3.Find_follower(req.session.className)
  ListVideo=await userhelper3.listvideo(response.data)
  console.log(ListVideo)
  }
   var classdata=response.data;
  const MainDT=classdata[0]
  await userhelper3.Color_manage(MainDT,response.data)
   const main=  classdata[0].email
   var profileimg=classdata[0].ProfileImage
   var userdata= req.session.data
   var examdata=response.exam
   let username_user={name:req.session.name}
  //  console.log(classdata)
   let classid={name:req.session.className}
   leader=false;
   if(userdata){
  if(userdata.email==main){
    console.log("true")
    leader=true;
  }else{
    console.log("false")

  }}
    res.render ('channelpage',{ListVideo,MainDT,userdata,classdata,username_user,leader,examdata,classid,profileimg,followdata,All_fOLowdata})
    
})





 

module.exports = router;
