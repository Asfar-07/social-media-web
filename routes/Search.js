const express = require('express');
const router = express.Router();
var Schema=require('../databaseSchema/Schema1')
const mongoose = require('mongoose');
var connectiondb2=require('../connection/db2')

router.get('/', async (req, res) => {
  const searchTerm = req.query.q;
console.log(searchTerm)
if(searchTerm.length!=0){
const connection= connectiondb2({outputcomment:"searching",db1info:true,db2info:false})
       const database=connection.db1
        collectionName='profiledatas';
        const SearchData = database.model.collectionName || database.model(collectionName,Schema)  
        const data=await SearchData.find(  { className: { $regex: new RegExp('^'+searchTerm+'.*',"i")},Private:false }).exec();
        // console.log(data)
        res.send(data)
}

});

module.exports = router;