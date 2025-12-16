var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const multer = require('multer');
const path=require('path')
var Date2=require('../Time-Date/Datecreation')
var Schema=require('../databaseSchema/Schema1')
var connectiondb2=require('../connection/db2')


const filestorage=multer.diskStorage({
    destination:(req,file,callback)=>{
      callback(null,"uploads");
    },
    filename:(req,file,callback)=>{
      const ramdomName=Date.now()+"_"+Math.round(Math.random()*1000)
      callback(null,ramdomName+path.extname(file.originalname))
    }
  })
  
  const upload = multer({ dest: 'uploads/',storage:filestorage});

// Serve static files from the 'uploads' directory
// app.use(express.static('uploads'));

router.post('/', upload.fields([{ name: 'video', maxCount: 1 }, { name: 'image', maxCount: 1 }]), function(req, res, next) {
    // Access the text input data
    const textDisc= req.body.textData;
    const textTittle=req.body.tittle
  
    // Access the uploaded files
    const videoFile = req.files['video'];
    const imageFile = req.files['image'];
  
    // Log the uploaded files for demonstration
    console.log('Text Data:', textDisc);
     console.log('Text Tittel:', textTittle);
    console.log('Video File:', videoFile);
    console.log('Image File:', imageFile);
    var currecttime=Date2.Alldate()
    
    const connection= connectiondb2({outputcomment:"StoreVideo",db1info:true,db2info:false})
      const database=connection.db1
      collectionName='classdata-'+req.session.classinfo.classId;
      const mainclass= database.model.collectionName || database.model(collectionName,Schema)  
      const Data=  new mainclass({
        Tittle:textTittle,
        Description:textDisc,
        Thumbnail:imageFile[0].path,
        Video:videoFile[0].path,
        check:"video",
        createtime:currecttime

        })
        Data.save()
    res.redirect('/results')
  });
  

module.exports=router