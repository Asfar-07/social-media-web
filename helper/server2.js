const { Socket } = require("socket.io");
const { io } = require("../app");
var connectiondb=require('../connection/db')
const anotherfunction=require('./classhelper')

let socketApi = () => 
  io.on("connection", (socket) =>
  { console.log("a user connected", socket.id); 

  socket.on('disconnect',()=>{
    console.log("connection closed")
  })
  socket.on('chat message',(message)=>{
   
    io.emit('chat message',message)
  })
  socket.on('imagepath',(imagepath)=>{
    var image= imagepath;
 console.log(image)
    
//     io.emit('image',imageData)
     })
     socket.on('username',(name)=>{
   
   console.log("username==="+name)
   io.emit('username',name)
        })
})

module.exports=socketApi
            
    

          
