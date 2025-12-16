const express=require("express")
const router=express.Router()
const bodyParser = require('body-parser');
const userhelper2=require("../helper/user-helper2")

router.post('/', bodyParser.urlencoded({ extended: true }),async function (req, res, next) {
    const data=req.body
    // console.log(data.imgsrc)
    userhelper2.Update_Profile({Real_data:req.body,classname:req.session.className})
})
module.exports=router;