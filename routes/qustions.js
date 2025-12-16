var express = require('express');
var router = express.Router();
const path=require('path')
const bodyParser = require('body-parser');
const userhelper=require('../helper/exam-helper');
router.get('/',async function(req, res, next) {
  const response=await userhelper.Qustions({classinfo:req.session.classinfo,realdata:req.session.examdetails})
  const examdata=response.data
  res.render('qustions',{examdata})
});
/* GET home page. */

router.post('/', bodyParser.urlencoded({ extended: true }), async (req, res) => {
  req.session.examdetails=req.body
  res.redirect("/qustions")
})

module.exports = router;