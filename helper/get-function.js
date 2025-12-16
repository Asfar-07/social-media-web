var connectiondb=require('../connection/db')
var connectiondb2=require('../connection/db2')
const mongoose = require('mongoose');
var Schema=require('../databaseSchema/Schema1');
const { beaker } = require('lucide-static');
let convertime=async(data)=>{
    const class_data=data.data
    const user_data=data.userdata
    class_data.forEach(async(item, index) => {
        if(class_data[index].user_email){
            const connection=await connectiondb2({outputcomment:"findname",db1info:false,db2info:true})
            const database=connection.db2
            mongoose.models={};
            let response={}
            collectionName='userdatas';
            const loginData =await database.model.collectionName || database.model(collectionName,Schema)  
            const finaldata=await loginData.findOne({email:class_data[index].user_email});
            class_data[index].ProfileImage=finaldata.ProfileImage;
           }
        if(item.user_email==user_data.email){
         class_data[index].check="you";
         }
         const Admin_email=class_data[0].email
         if(item.user_email==Admin_email){
            class_data[index].admin="admin";
            }
      });
}
let Find_userNAme=async(data)=>{
    const class_data=data.data
    for(let i=0;i<class_data.length;i++){
        if(class_data[i].user_email){
            const connection=await connectiondb2({outputcomment:"findname",db1info:false,db2info:true})
            const database=connection.db2
            mongoose.models={};
            let response={}
            collectionName='userdatas';
            const loginData =await database.model.collectionName || database.model(collectionName,Schema)  
            const finaldata=await loginData.findOne({email:class_data[i].user_email});
            class_data[i].username=finaldata.username;
           }
    }
}
let Find_follower=async(OrginalData)=>{
        const connection= connectiondb2({outputcomment:"Followerfindname",db1info:false,db2info:true})
        const database=connection.db2
        mongoose.models={};
        let response={}
        collectionName='userdatas';
        const loginData =await database.model.collectionName || database.model(collectionName,Schema)  
        const finaldata=await loginData.find({following: { $regex: new RegExp(OrginalData, 'i') } })
        return(finaldata)
}
let Color_manage=async(OrginalData,Alldata)=>{
    var listForSP=[
        OrginalData.HeaderCode,
        OrginalData.LeftsideCode,
        OrginalData.MainFondColor,
        OrginalData.MainbodyCode,
        OrginalData.inputCode,
        OrginalData.MSgCode,

    ]
     for(i=0;i<listForSP.length;i++){
        const split=listForSP[i].split(",")
        switch(i){
            case 0:
                    OrginalData.HeaderCode1=split[0]
                    OrginalData.HeaderCode2=split[1]
                break;
            case 1:
                        OrginalData.LeftsideCode1=split[0]
                        OrginalData.LeftsideCode2=split[1]
                   break;
        
                case 2:
                            OrginalData.MainFondColor1=split[0]
                            OrginalData.MainFondColor2=split[1]
                       
                        break;
                case 3:
                            OrginalData.MainbodyCode1=split[0]
                            OrginalData.MainbodyCode2=split[1]
                      
                        break;
                case 4:
                              
                            OrginalData.inputCode1=split[0]
                            OrginalData.inputCode2=split[1]
                       
                        break;
                case 5:
                    const split1=OrginalData.MSgCode.split(",")
                            for(j=0;j<Alldata.length;j++){
                                Alldata[j].MSgCode1=split1[0]
                                Alldata[j].MSgCode2=split1[1]
                            }
                        break;
           default:
            console.log("err")
            break;
     }
    }
   
    // console.log(Alldata)
}
let listvideo=async(DATA)=>{
    let videolist=[]
    let MainData=DATA[0]
    for(let i=0;i<DATA.length;i++){
        if(DATA[i].check=="video"){
            videolist[i] =DATA[i]
            videolist[i].HeaderCode=DATA[0].HeaderCode
        }
    }
    
return(videolist)
}

// }
module.exports={convertime,Find_userNAme,Find_follower,Color_manage,listvideo}