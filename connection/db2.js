const mongoose = require('mongoose');
function connectiondb2(databaseName) {
  let db1;
  let db2;
  let functionNAme_forclog=databaseName.outputcomment
// Set up default MongoDB connection string
const connectionString1 = 'mongodb://localhost/classdata';
if(databaseName.db1info){
// Connect to the MongoDB database
 db1=mongoose.createConnection(connectionString1, { useNewUrlParser: true, useUnifiedTopology: true},function(err,client){
    if (err) throw err
    console.log('db1 connection ' + functionNAme_forclog)
  } );
}
const connectionString2 = 'mongodb://localhost/Accounts';


// Connect to the MongoDB database
if(databaseName.db2info){
db2=mongoose.createConnection(connectionString2, { useNewUrlParser: true, useUnifiedTopology: true},function(err,client){
    if (err) throw err
    console.log('db2 connection '+ functionNAme_forclog)
  } );
}
  return({db1:db1,db2:db2})
}
module.exports= connectiondb2;