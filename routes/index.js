var express = require('express');
var router = express.Router();
const path=require('path')
const userhelper=require('../helper/user-helper');
const bodyParser = require('body-parser');
/* GET home page. */
router.get('/', function(req, res, next) {
  
 const data= req.session.data

  
  res.render('project',{data})
 
  
});
router.post('/', bodyParser.urlencoded({ extended: true }), async (req, res) => {
  userhelper.mainClass(req.body)
  .then((response)=>{
    if(response.status){
      req.session.classdata=response.data;
      req.session.classinfo=response.data2;
      req.session.className=response.className;
      req.session.email=response.email
  
      res.redirect("/results")
    }else{
      res.redirect("/")
    }
    // console.log(response)

  })
  
 });
module.exports = router;
