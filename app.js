var createError = require('http-errors');
var express = require('express');
const path=require('path')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var hbs=require('hbs')
const exphbs = require('express-handlebars');
var session=require('express-session')
var indexRouter = require('./routes/index');
var answer=require('./routes/answer')
var qustions = require('./routes/qustions');
var Search = require('./routes/Search');
var usersRouter = require('./routes/class');
var loginRouter = require('./routes/login');
var Accounts= require('./routes/accounts');
var signupRouter = require('./routes/signup');
const aboutRouter=require('./routes/about');
const anotherfunction=require('./helper/classhelper');
const examhelper=require('./helper/exam-helper');
var userhelper=require("./helper/user-helper")
var userhelper2=require("./helper/user-helper2")
var exam=require('./routes/exam')
var updateprofile=require("./routes/UpdateLAndR")
var userFinaldata=require('./routes/UserFinal')
var change_colOr=require('./routes/chanecolor')
var addvideo=require('./routes/addvideo')

var newclass = require('./routes/newclass');
var connectiondb2=require('./connection/db2')
var Schema=require('./databaseSchema/Schema1')
const { Server } = require("socket.io");
const http = require("http");
const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  /**options */
  maxHttpBufferSize:10e6,
});
const multer = require('multer');


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
 app.use(express.static('uploads'));

app.use("/uploads",express.static(path.join(__dirname,"uploads")))

// connectiondb()

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({ extended: true,limit:"10mb" }));
app.use(cookieParser());
app.use(session({secret:'key',resave:false,saveUninitialized:true,/*cookie:{maxAge:60000*60*24*10}*/}))
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/qustions', qustions)
app.use('/results', usersRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter)
app.use('/newclass', newclass)
app.use('/accounts', Accounts)
app.use('/answer', answer)
app.use('/about',aboutRouter)
app.use('/search',Search)
app.use('/exam',exam)
app.use('/colorcode',change_colOr)
app.use('/updateprofile',updateprofile)
app.use('/addvideo',addvideo)


// app.use("userexam",userFinaldata)
app.use('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})
app.post('/UserDP',async(req,res)=>{
  const frontenddata=req.body
 let User=req.session.data
  const useremail=User.email
  const connection= connectiondb2({outputcomment:"checkfollow",db1info:false,db2info:true})
  const database=connection.db2
      collectionName2='userdatas';
      const Userdata = database.model.collectionName2 || database.model(collectionName2,Schema)
      const DATA=await Userdata.findOne({email:useremail})
      DATA.ProfileImage=frontenddata.imgsrc
      DATA.save()
      res.send("Ok")
})
app.post('/updatethem',async(req,res)=>{

  console.log(req.body)
  let userdata=req.body
  const connection= connectiondb2({outputcomment:"Themeupdate",db1info:true,db2info:false})
  const database=connection.db1
  collectionName='classdata-'+req.session.classinfo.classId;
  collectionName2='profiledatas'
  const Counter = database.model.collectionName || database.model(collectionName,Schema)
  const Counter2 = database.model.collectionName2 || database.model(collectionName2,Schema)
// Find the document (there should be only one in this case)
const counter = await Counter.findOne({classId:req.session.classinfo.classId});
const counter2 = await Counter2.findOne({classId:req.session.classinfo.classId});
counter.theme=userdata.imgsrc
await counter.save();
counter2.theme=userdata.imgsrc
     await counter2.save();
     res.send("ok")
})
app.post('/api/increase', async (req, res) => {
  // console.log(req.body.followStutes)
    const connection= connectiondb2({outputcomment:"Followcounts",db1info:true,db2info:false})
       const database=connection.db1
        collectionName='classdata-'+req.session.classinfo.classId;
        collectionName2='profiledatas'
        const Counter = database.model.collectionName || database.model(collectionName,Schema)
        const Counter2 = database.model.collectionName2 || database.model(collectionName2,Schema)
    // Find the document (there should be only one in this case)
    const counter = await Counter.findOne({classId:req.session.classinfo.classId});
    const counter2 = await Counter2.findOne({classId:req.session.classinfo.classId});
    // console.log(counter)
    // console.log(counter2)
    // If the document doesn't exist, create one with the initial value 0
    if (req.body.followStutes) {
      counter.Followvalue += 1;
      await counter.save();
      counter2.Followvalue += 1;
     await counter2.save();
    
    } else {
      // Increment the value
      counter.Followvalue -= 1;
      await counter.save();
      counter2.Followvalue -= 1;
      await counter2.save();
    }
 res.send("ok")
   
})
app.get('/Searchresult/:key', bodyParser.urlencoded({ extended: true }), async (req, res) => {
  // console.log(req.params.key)
  const connection= connectiondb2({outputcomment:"searching",db1info:true,db2info:false})
       const database=connection.db1
        collectionName='profiledatas';
        const SearchData = database.model.collectionName || database.model(collectionName,Schema)  
        const data=await SearchData.find(  { className:  { $regex: new RegExp('^'+req.params.key+'.*',"i")},Private:false }).exec();
        console.log(data)
  res.render("Search",{data})
})
// app.post('/Searchresult', bodyParser.urlencoded({ extended: true }), async (req, res) => {

// })
app.post('/studentans', bodyParser.urlencoded({ extended: true }), async (req, res) => {
   examhelper.UserExam({classinfo:req.session.classinfo,userid:req.session.examdetails,realdata:req.body}).then((response)=>{
    
    })
    
    res.redirect("/results")
  })
app.post("/follow",bodyParser.urlencoded({extended:true}),async(req,res)=>{
  userhelper2.Follow({classinfo:req.session.classinfo,useremail:req.session.data,FollowOR:req.body.followStutes})
    res.send("ok")
})
app.post("/ChangePrivate",bodyParser.urlencoded({extended:true}),async(req,res)=>{
userhelper2.ChangePrivate(req.body,req.session.className)
})
app.post("/trmark",bodyParser.urlencoded({extended:true}),async(req,res)=>{

  examhelper.AnswerMark({classinfo:req.session.classinfo,realdata:req.body.data})
})

app.post('/results', upload.single('image'),bodyParser.urlencoded({ extended: true }), async (req, res) => {
  const { text } = req.body;
  if(req.file){
    var  {path} = req.file;
    var  {originalname} = req.file;
    const imagedata={realdata:path,pathname:originalname,className:req.session.className,username:req.session.name}
    io.emit('image',imagedata)
  }
  const textmsg={textmessage:text,className:req.session.className,username:req.session.name}
  if(text){
    io.emit('username',req.session.name)
    io.emit('chat message',textmsg)
  }
  
  anotherfunction({message:req.body,imagedata:req.file,username:req.session.name,useremail: req.session.doLogin_Email,classname:req.session.className})
  .then(async(response)=>{
  //  console.log(response.data)
  res.send("ok")
    })
   })
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = { app, httpServer,io };
