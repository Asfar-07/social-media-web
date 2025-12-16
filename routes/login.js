var express = require('express');
var router = express.Router();
const path=require('path')
const bodyParser = require('body-parser');
const userhelper=require('../helper/user-helper');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  data2=req.session.rel2
data=req.session.rel
  res.render('login',{data2,data})
  req.session.rel2=false
  req.session.rel=false
});
router.post('/', bodyParser.urlencoded({ extended: true }), async (req, res) => {

  userhelper.doLogin(req.body)
.then((response)=>{
if(response.status){
  req.session.loggedId=true
  req.session.data=response.data
  req.session.doLogin_Email=response.email
  req.session.name=response.name
  res.redirect("/")
}else{
   req.session.rel2=true
  res.redirect("/login")
}

  })
// res.redirect("/")
})

module.exports = router;