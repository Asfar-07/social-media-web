// var express = require('express');
// var router = express.Router();
// const path=require('path')
// const bodyParser = require('body-parser');
// const userhelper=require('../helper/exam-helper');
// router.get('/', function(req, res, next) {
//  res.redirect()
// });
// /* GET home page. */

// router.post('/', bodyParser.urlencoded({ extended: true }), async (req, res) => {
//   userhelper.Answer({classinfo:req.session.classinfo,realdata:req.body}).then((response)=>{
//     req.session.examdatas=response.data
//     res.redirect('/answer')
//   })
// })

// module.exports = router;