const check_feature=document.getElementById("check-feature").textContent
const checkleader=document.getElementById("checkleader").textContent
      const examBtn1 = document.querySelectorAll('#examBtn');
      const videoBtn2 = document.querySelectorAll('#videoBtn');
      const gamesBtn3 = document.querySelectorAll('#gamesBtn');
      const feature_game=document.getElementById('feature-game')
      const feature_video=document.getElementById('feature-video')
      const feature_exam=document.getElementById('feature-exam')
      let eachfeature =check_feature.split("#")
      console.log(checkleader)

      if(eachfeature[0]=="true"){
        if(checkleader=="true"){

          feature_game.checked=true
        }
gamesBtn3.forEach(async(item, index) => {
item.style.display=""
})
}else{
  if(checkleader=="true"){

    feature_game.checked=false
  }
 gamesBtn3.forEach(async(item, index) => {
item.style.display="none"

})
}

if(eachfeature[1]=="true"){
  if(checkleader=="true"){

    feature_video.checked=true
  }
videoBtn2.forEach(async(item, index) => {
item.style.display=""

})
}else{
  if(checkleader=="true"){

    feature_video.checked=false
  }
   videoBtn2.forEach(async(item, index) => {
   item.style.display="none"

    })
}
if(eachfeature[2]=="true"){
  if(checkleader=="true"){

    feature_exam.checked=true
  }
examBtn1.forEach(async(item, index) => {
item.style.display=""

})
}else{
  if(checkleader=="true"){

    feature_exam.checked=false
  }
   examBtn1.forEach(async(item, index) => {
   item.style.display="none"

      })
}


               // Get references to the buttons and div elements
// const chatBtn = document.getElementById('chatBtn');
// const examBtn = document.getElementById('examBtn');
// const videoBtn = document.getElementById('videoBtn');
// const gamesBtn = document.getElementById('gamesBtn');
const chatContent = document.getElementById('chatContent');
const examContent = document.getElementById('examContent');
const videoContent = document.getElementById('videoContent');
const gamesContent = document.getElementById('gamesContent');

// Add click event listeners to the buttons
// chatBtn.addEventListener("click", function() {
//     showContent(chatContent);
// });
function chatBtn(){
    showContent(chatContent);
}

function examBtn() {
     showContent(examContent);
 
};

function videoBtn() {
    showContent(videoContent);
};

 function gamesBtn() {
    showContent(gamesContent);
};

// Function to show content and hide others
function showContent(content) {
    // Hide all content divs
    chatContent.style.display = 'none';
    examContent.style.display = 'none';
    videoContent.style.display = 'none';
    gamesContent.style.display = 'none';
    
    // Show the specified content div
    content.style.display = 'block';
}