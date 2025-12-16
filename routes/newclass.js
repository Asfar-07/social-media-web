var express = require('express');
var router = express.Router();
const userhelper=require('../helper/user-helper');
const bodyParser = require('body-parser');



// const userhelper=require('../helper/user-helper');

/* GET home page. */
router.get('/', function(req, res, next) {
 classexist= req.session.classexist
 userdata=req.session.data
  res.render('newclass',{classexist,userdata})
  req.session.classexist=false
});
router.post('/', bodyParser.urlencoded({ extended: true }), async (req, res) => {
  userhelper.dbb(req.body)
  userhelper.newClass(req.body)
  .then((response)=>{
    console.log(response.status)
    if(response.status){
       
       res.redirect("/")
    }else{
      req.session.classexist=true
      res.redirect("/newclass")
    }
    // console.log(response)

  })
})

module.exports = router;
