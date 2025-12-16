const CheckBoxP=document.getElementById('CheckPrivate')
if(CheckBoxP){
      CheckBoxP.addEventListener("input",async()=>{
        console.log(CheckBoxP.checked)
        const PickedValue=CheckBoxP.checked
        
    try{
 const response = await fetch('/ChangePrivate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  
      body: JSON.stringify({PickedValue})
});
if (response.ok) {
  console.log('Data saved successfully');
} else {
  console.log('Error:', response.status);
}
} catch (error) {
  console.log('Error:', error);
}
      })
    }

const  Main_box=document.getElementById("Profile")
function OpenPofile(){
if(Main_box.style.display=="none"){
Main_box.style.display="block"
}else{
Main_box.style.display="none"
}
}

function updateFileName(input) {
var fileNameDisplay = document.getElementById("fileNameDisplay");
var displayLogo = document.getElementById("dpLOgo");
var Main_displayLogo = document.getElementById("dpLOgo_Main");

var fileName = input.files[0];
if( fileName.size<=1000000){
var Image_Type=true;
console.log("true")
}else{
alert("Please note,Enter only image AND 1mp image")
}

if(Image_Type){
const reader = new FileReader();
reader.onload = () => {
const imageData = reader.result;
displayLogo.src=imageData
Main_displayLogo.src=imageData
Change_Image(imageData)
}
reader.readAsDataURL(fileName)
}

Change_Image=async(imgsrc)=>{
try{
const response = await fetch('/updateprofile', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},

body: JSON.stringify({imgsrc})
});
if (response.ok) {
console.log('Data saved successfully');
} else {
console.log('Error:', response.status);
}
} catch (error) {
console.log('Error:', error);
}
}
}
async function FinalSubmitProfile(){
// const chatBtn = document.getElementById('chatBtn');
const examBtn = document.querySelectorAll('#examBtn');
const videoBtn = document.querySelectorAll('#videoBtn');
const gamesBtn = document.querySelectorAll('#gamesBtn');
const editechannelname=document.getElementById("editechannelname")
const viewchannelname=document.getElementById("viewchannelname")
const feature_game=document.getElementById('feature-game')
const feature_video=document.getElementById('feature-video')
const feature_exam=document.getElementById('feature-exam')

let name=editechannelname.textContent
viewchannelname.textContent=name
let feature=""

if(feature_game.checked){
feature +="true#"
gamesBtn.forEach(async(item, index) => {
item.style.display=""

})
}else{
feature +="false#"
 gamesBtn.forEach(async(item, index) => {
item.style.display="none"

})
}
if(feature_video.checked){
feature +="true#"
videoBtn.forEach(async(item, index) => {
item.style.display=""

})
}else{
  feature +="false#"
   videoBtn.forEach(async(item, index) => {
   item.style.display="none"

    })
}
if(feature_exam.checked){
feature +="true"
examBtn.forEach(async(item, index) => {
item.style.display=""

})
}else{
  feature +="false"
   examBtn.forEach(async(item, index) => {
   item.style.display="none"

      })
}
console.log(feature)
Main_box.style.display="none"
try{
const response = await fetch('/updateprofile', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},

body: JSON.stringify({name,feature})
});
if (response.ok) {
console.log('Data saved successfully');
} else {
console.log('Error:', response.status);
}
} catch (error) {
console.log('Error:', error);
}

}