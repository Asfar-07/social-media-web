var express = require('express');
var router = express.Router();
var app=express()
const path=require('path')
const userhelper=require('../helper/user-helper');
const bodyParser = require('body-parser');


/* GET home page. */

router.post('/', bodyParser.urlencoded({ extended: true }), async (req, res) => {
  console.log(req.body)
  userhelper.doSignup(req.body).then((response)=>{
    // console.log(response);

    if(response.status){

      req.session.loggedId=true
      req.session.data=response.data
      req.session.name= response.name
      req.session.email=response.email
      res.redirect("/")
    }else{
      req.session.rel=true
      res.redirect("/login")
      
    }
   })
 
})

module.exports = router;