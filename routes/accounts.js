var express = require('express');
var router = express.Router();
var bodyParser=require("body-parser")
const userhelper=require('../helper/user-helper');
const userhelper2=require('../helper/user-helper2');


router.get('/',async function (req, res, next) {
const response=await  userhelper2.AccountInfo(  req.session.data)
const following=response.following
const mychannel=response.mychannel
let userdata=req.session.data
   
res.render("accounts",{mychannel,following,userdata})
})
router.post('/', bodyParser.urlencoded({ extended: true }),async function (req, res, next) {
  userhelper.mainAccountsClass(req.body)
  .then((response)=>{
    if(response.status){
      req.session.classdata=response.data;
      req.session.className=response.className;
      req.session.classinfo=response.data2;
      // req.session.email=response.email
  
      res.redirect("/results")
    }else{
      res.redirect("/accounts")
    }
})
})
module.exports = router;