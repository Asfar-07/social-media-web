var express = require('express');
var router = express.Router();
const path=require('path')
const bodyParser = require('body-parser');
const userhelper=require('../helper/exam-helper');
router.get('/',async function(req, res, next) {
  response=await userhelper.Answer({classinfo:req.session.classinfo,realdata:req.session.examdetails})
  const examdata=response.data
  const main=   req.session.email
   var userdata= req.session.data
   console.log(userdata)
   leader=false;
   if(userdata){
  if(userdata.email){
    console.log("true")
    leader=true;
  }else{
    console.log("false")

  }}
  res.render('answer',{examdata,leader})
});
router.post('/', bodyParser.urlencoded({ extended: true }), async (req, res) => {
  req.session.examdetails=req.body
  res.redirect("/answer")
})
module.exports=router;