const submitButton = document.getElementById('submit-button');
const Inputdiv=document.getElementById("Typing_ArEa_main")
const Main_bodydiv=document.getElementById("Mainmessagebody")
 const collectoniconForpofile=document.querySelector(".collectoniconForpofile")
 const collectonicon =document.querySelector(".collectonicon") 
 const topheader=document.getElementById("ProfileHeader")
 const GoReports=document.querySelector(".GoReports")
 const GoHome=document.querySelector(".GoHome")
 const backbody=document.querySelector("body")
 const Anotherbackbody=document.querySelector(".rightmain")
// const MainHeader=document.getElementById("ProFile_Full-D")
 const Headerdiv=document.querySelector(".leftmain")
 const Videodiv=document.querySelectorAll(".eachvideo")
// const Leftdiv=document.getElementById("left-main")
 const Color_picker=document.getElementById('Peaker_color')
 const Main_imag=document.getElementById("imgbody")
 Main_imag.addEventListener("input",()=>{
  console.log(Main_imag)
   const reader = new FileReader();
reader.onload = () => {
const imageData = reader.result;
Main_bodydiv.style.background=`url(${imageData})`
Main_bodydiv.style.backgroundRepeat="no-repeat"
Main_bodydiv.style.backgroundSize="100% 100%"
}
reader.readAsDataURL(Main_imag.files[0])
})
function Open_Color(){
const Now_see=window.getComputedStyle(Color_picker).display
if(Now_see=="none"){
  Color_picker.style.display="block"
}else{
  Color_picker.style.display="none"
}
}
function ADD_COLor(data){
const ddd=data.previousSibling.previousSibling
const Select_allInput=ddd.querySelectorAll('input')
const Input_count=Select_allInput.length
if(Input_count<3){
const New_input = document.createElement('input');
New_input.type="color"
New_input.value="#FFFFFF"
New_input.className=ddd.firstChild.className
ddd.appendChild(New_input)
New_input.addEventListener('input', ()=>{applyGradient(ddd.firstChild.className)});
}
}
function  Remove_COLor(data){
const ddd=data.previousSibling
const Select_allInput=data.previousSibling.querySelectorAll('input')
const Input_count=Select_allInput.length
if(Input_count != 1){
ddd.removeChild(Select_allInput[Select_allInput.length-1])
}
}
function applyGradient(inputname) {
const colorPickers = document.querySelectorAll("."+inputname);
console.log(colorPickers)
const colors = Array.from(colorPickers).map(colorPicker => colorPicker.value);
if(inputname=="Header_mark"){
if(colors.length !=1){
Headerdiv.style.background = `linear-gradient(to right, ${colors.join(', ')})`;
Videodiv.style.background = `linear-gradient(to right, ${colors.join(', ')})`;

}else{
  Headerdiv.style.background=colors[0]
  for (let index = 0; index < Videodiv.length; index++) { 
    Videodiv[index].style.background=colors[0]
  }
  // MainHeader.style.background=colors[0]
}
}
  if(inputname=="Rightside_mark"){
if(colors.length ==1){

 collectoniconForpofile.style.color=colors[0]
  collectonicon.style.color=colors[0]
}
}
  if(inputname=="Main_bodt"){
if(colors.length !=1){
Main_bodydiv.style.background = `linear-gradient(to right, ${colors.join(', ')})`;
topheader.style.background = `linear-gradient(to right, ${colors.join(', ')})`;
GoReports.style.background = `linear-gradient(to right, ${colors.join(', ')})`;
GoHome.style.background = `linear-gradient(to right, ${colors.join(', ')})`;
}else{
Main_bodydiv.style.background=colors[0]
topheader.style.background=colors[0]
GoReports.style.background=colors[0]
GoHome.style.background=colors[0]
}
}
  if(inputname=="inputpicker"){
if(colors.length !=1){
Inputdiv.style.background = `linear-gradient(to right, ${colors.join(', ')})`;
}else{
 Inputdiv.style.background=colors[0]
}
}  if(inputname=="MsgPicker"){
 if(colors.length !=1){
backbody.style.background = `linear-gradient(to right, ${colors.join(', ')})`;
Anotherbackbody.style.background = `linear-gradient(to right, ${colors.join(', ')})`;
}else{
 backbody.style.backgroundColor=colors[0]
 Anotherbackbody.style.backgroundColor=colors[0]
}

}
 if(inputname=="FontPicker"){
backbody.style.color=colors[0]
backbody.style.color=colors[0]
}

}
document.querySelector('.Header_mark').addEventListener('input', ()=>{applyGradient("Header_mark")});
 document.querySelector('.Rightside_mark').addEventListener('input', ()=>{applyGradient("Rightside_mark")});
document.querySelector('.Main_bodt').addEventListener('input', ()=>{applyGradient("Main_bodt")});
 document.querySelector('.inputpicker').addEventListener('input', ()=>{applyGradient("inputpicker")});
 document.querySelector('.MsgPicker').addEventListener('input', ()=>{applyGradient("MsgPicker")});
  document.querySelector('.FontPicker').addEventListener('input', ()=>{applyGradient("FontPicker")});
  document.querySelector('#Header_mark2').addEventListener('input', ()=>{applyGradient("Header_mark")});
  document.querySelector('#Rightside_mark2').addEventListener('input', ()=>{applyGradient("Rightside_mark")});
  document.querySelector('#inputpicker2').addEventListener('input', ()=>{applyGradient("inputpicker")});
 function ReseatColor(){
   // Inputdiv.style.background=null
  const Header_picker = document.querySelector(".Header_mark")
  const Left_picker = document.querySelector(".Rightside_mark")
  const Msginput_picker = document.querySelector(".inputpicker")
  const Msg_picker = document.querySelector(".MsgPicker")
  const Font_picker = document.querySelector(".FontPicker")
  const Mainbody_picker = document.querySelector(".Main_bodt")
  console.log(Header_picker.nextElementSibling)
  if(Header_picker.nextElementSibling){
    Header_picker.nextElementSibling.remove()
  }
  if(Left_picker.nextElementSibling){
  Left_picker.nextElementSibling.remove()
  }
  if(Msginput_picker.nextElementSibling){
  Msginput_picker.nextElementSibling.remove()
  }
  if(Msg_picker.nextElementSibling){
  Msg_picker.nextElementSibling.remove()
  }
  if(Font_picker.nextElementSibling){
  Font_picker.nextElementSibling.remove()
  }
   Header_picker.value="#2f3136"
   Left_picker.value="#666666"
   Msginput_picker.value='#41444b'
   Msg_picker.value="#202225"
   Font_picker.value="#ffffff"
   Mainbody_picker.value="#36393f"

  Inputdiv.style.background="rgba(65, 68, 75, 1)"
   Headerdiv.style.background="rgba(47, 49, 54, 1)"
   for (let index = 0; index < Videodiv.length; index++) { 
    Videodiv[index].style.background="rgba(47, 49, 54, 1)"
  }
    topheader.style.background="rgba(54, 57, 63, 1)"
    GoReports.style.background="rgba(54, 57, 63, 1)"
    GoHome.style.background="rgba(54, 57, 63, 1)"
     Main_bodydiv.style.background="rgba(54, 57, 63, 1)"
     backbody.style.color="white"
     submitButton.style.color="white"
     backbody.style.background="rgba(32, 34, 37, 1)"
     Anotherbackbody.style.background="rgba(32, 34, 37, 1)"
     collectonicon.style.color="#666666"
     
 }

 function PickerImage(){
 var imageData;
//  const Main_imag=document.getElementById("imgbody")
 Main_imag.addEventListener("input",()=>{
   const reader = new FileReader();
reader.onload = () => {
imageData = reader.result;
Main_bodydiv.style.background=`url(${imageData})`
Main_bodydiv.style.backgroundRepeat="no-repeat"
Main_bodydiv.style.backgroundSize="100% 100%"
}
reader.readAsDataURL(Main_imag.files[0])

 })
 }
 PickerImage()
function set_Color(){
  const Array_1=[]
  Set_collectionColor=()=>{
    var listname=[".Header_mark",".Rightside_mark",".Main_bodt",".inputpicker",".MsgPicker",".FontPicker"]
    for(i=0;i<=5;i++){
     console.log(listname[i])
 const colorPickers = document.querySelectorAll(listname[i]);
const colors = Array.from(colorPickers).map(colorPicker => colorPicker.value);
var comprescode;
if(colors[1]){
 comprescode=colors[0]+","+colors[1]
}else{
comprescode=colors[0]
}
Array_1[i]={color1:comprescode}
    }
    
  }
  Set_collectionColor()
 Change_Color=async(colorcode,Imgdata)=>{
  console.log(colorcode)
  Color_picker.style.display="none"
try{
const response = await fetch('/colorcode', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},

body: JSON.stringify({colorcode,Imgdata})
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
const Main_imag=document.getElementById("imgbody")
if(Main_imag.files[0]){
const reader = new FileReader();
reader.onload = () => {
const imageData = reader.result;
Change_Color(Array_1,imageData)
console.log(imageData)

}
reader.readAsDataURL(Main_imag.files[0])
}else{
Change_Color(Array_1)
}

}