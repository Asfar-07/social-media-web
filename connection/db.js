// Require the Mongoose module
const mongoose = require('mongoose');
function connectiondb(databaseName) {
    

// Set up default MongoDB connection string
const connectionString = 'mongodb://localhost/'+databaseName;

// Connect to the MongoDB database
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true},function(err,client){
    if (err) throw err
    console.log('db2 connection')
  } );
}
module.exports= connectiondb;