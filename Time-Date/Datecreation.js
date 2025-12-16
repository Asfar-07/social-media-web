
let examdate=(Time)=>{
    return new Promise(async(resolve,reject)=>{
    let uptime=Number(Time)
    console.log(uptime)
    const currenttime2=new Date();
    const formattime=currenttime2.toLocaleString();
    const currenttime=new Date(currenttime2);
    const cminute1=currenttime.getMonth()+1+"/"+currenttime.getDate()+"/"+currenttime.getFullYear()+", "+currenttime.toLocaleTimeString()
    currenttime.setMinutes(currenttime.getMinutes()+uptime);
    const update=currenttime.toLocaleString();
const cminute2=currenttime.getMonth()+1+"/"+currenttime.getDate()+"/"+currenttime.getFullYear()+", "+currenttime.toLocaleTimeString()
    console.log(currenttime2)
    console.log(formattime)
let responseDate={}
responseDate.currecttime=formattime
responseDate.addtime=update
 resolve(responseDate)
    })
}
let Alldate=()=>{
        const currenttime=new Date();
        const formattime=currenttime.getTime();
return(formattime)
}
let checktime=(finaldate)=>{
    console.log(finaldate)
const formet1=finaldate
const parts = formet1.split(', '); // Split the date and time

// Extract date and time parts
const datePart = parts[0]; // "10/17/2023"
const timePart = parts[1]; // "11:00:00"
// Parse the date
const dateArray = datePart.split('/'); // Split the date by '/'
const month = dateArray[0];
const day = dateArray[1];
const year = dateArray[2];

// Create a new date in the desired format (YYYY-MM-DD)
const newDate =day+"/"+month+"/"+year+", "+timePart;
const currenttime=new Date(newDate);
const currenttime2=new Date();
const formattime=currenttime2.toLocaleString()
console.log(formattime)
const currenttime3=new Date(formattime);
 const timediff=Math.abs(currenttime2<=currenttime)
 console.log(timediff)
 return(timediff)
}
let timeseperate=(Time)=>{
    return new Promise(async(resolve,reject)=>{
    const dateTimeString = Time;
const dateTimeParts = dateTimeString.split(' '); // Split by the comma and space
let seperatetime={}
const dateString = dateTimeParts[0]; // "10/8/2023"
const timeString = dateTimeParts[1]; // "8:30:30"
const am_pmString = dateTimeParts[2];

console.log("Date:", dateString);
console.log("Time:", timeString);
console.log("Am-pm:", am_pmString);
seperatetime.time=timeString
seperatetime.date=dateString
seperatetime.am_pm=am_pmString
resolve(seperatetime)
    })
}
module.exports={examdate,Alldate,checktime,timeseperate}