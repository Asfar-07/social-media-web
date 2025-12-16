var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const userhelper=require("../helper/exam-helper")

router.post('/', bodyParser.urlencoded({ extended: true }), async (req, res) => {
  
  userhelper.MainExam({data:req.body,classname:req.session.className})
.then((response)=>{
    

  })
  
res.redirect('/results')
 })

module.exports=router;