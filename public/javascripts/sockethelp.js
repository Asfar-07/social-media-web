const socket = io();



function appendMessage(message) {
    const username = document.getElementById('name').textContent;
    console.log(username,message.username)
       let MESSAGE_AREA=document.getElementById('chatContent')
  if (value==message.className) {
  console.log(message)
  if(username==message.username){
         MESSAGE_AREA.innerHTML +=` <div class="messagesetMe">

                    <div class="messagegiveposition">
                        <div class="usernameAndusertest">
                            <div class="Username"><p>Me</p></div>
                            <div class="Userdata"><p>${message.textmessage}</p></div>
                        </div>
                        <div class="userDB">
                            <img src="/images/chibi-balloon-spiderman-bly29pc4e39npic5.jpg" width= "60px"
                            height="60px">
                        </div>
                    </div>

                </div>`
  }else{
              MESSAGE_AREA.innerHTML +=`<div class="messagesetanother">
                    <div class="messagegiveposition">
                        <div class="userDB">
                            <img src="/images/chibi-balloon-spiderman-bly29pc4e39npic5.jpg" width= "60px"
                            height="60px">
                        </div>
                        <div class="usernameAndusertest">
                            <div class="Username"><p>${message.username}</p></div>
                            <div class="Userdata"><p>${message.textmessage}</p></div>
                        </div>
                    </div>
                </div>`
  }
  }
}
// Handle received messages
socket.on('chat message', (message) => {
 appendMessage(message);
});
const iddiv=document.getElementById("classid")
 const imageInput = document.getElementById('image-input');
 const uploadButton = document.getElementById('submit-button');
 let value=iddiv.textContent
 // Handle image upload
 function Senddata()
{
     console.log("click")
 const messageInput = document.getElementById('input-field');
 const message = messageInput.value;
 const username = document.getElementById('name');
 const name = username.textContent;
   socket.emit('username', name);
 if (message !== '') {

   socket.emit('chat message', message);
    
  
 }

 };
  socket.on('image', (imageData) => {
           let MESSAGE_AREA=document.getElementById('chatContent')
           const username = document.getElementById('name').textContent;
  console.log(imageData)
  if(username==imageData.username){
     MESSAGE_AREA.innerHTML +=` <div class="messagesetMe">
                    <div class="messagegiveposition">
                        <div class="usernameAndusertest">
                            <div class="Username"><p>ME</p></div>
                            <div class="Userdata"><a href="${imageData.realdata}"><img src="/images/Blur-effect-on-picture.jpg" ></a></div>
                        </div>
                        <div class="userDB">
                            <img src="/images/chibi-balloon-spiderman-bly29pc4e39npic5.jpg" width= "60px"
                            height="60px">
                        </div>
                    </div>
                </div> `
  }
  else{
     MESSAGE_AREA.innerHTML +=` <div class="messagesetanother">
                    <div class="messagegiveposition">
                        <div class="userDB">
                            <img src="/images/chibi-balloon-spiderman-bly29pc4e39npic5.jpg" width= "60px"
                            height="60px">
                        </div>
                        <div class="usernameAndusertest">
                            <div class="Username"><p>${imageData.username}</p></div>
                            <div class="Userdata"><a href="${imageData.realdata}"><img src="/images/Blur-effect-on-picture.jpg" ></a></div>
                        </div>
                    </div>
                </div>`
  }
  })