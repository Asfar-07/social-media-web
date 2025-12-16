var express=require("express")
var router = express.Router();
const bodyParser = require('body-parser');
const userhelper2=require("../helper/user-helper2")
router.post("/", bodyParser.urlencoded({ extended: true }),async(req,res)=>{
 userhelper2.Update_color(req.body,req.session.className)
})
module.exports=router