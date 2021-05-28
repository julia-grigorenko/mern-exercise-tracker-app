const mongoose = require('mongoose');

//for using with docker containers
//const uri = "mongodb://admin:password@mongo";

//for using on localhost
const uri = "mongodb://localhost:27017";

const databaseName = "mern-exercise-tracker";
const mongoClientOptions = { 
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true,
        dbName: databaseName
    };

mongoose
    .connect(uri, mongoClientOptions)
    .catch(e => {
        console.error('Connection error: ', e.message)
    })

const db = mongoose.connection;

db.once('open', () => {
        console.log("MongoDB database connection established successfully")
   })
  .on('error', console.error.bind(console, 'MongoDB connection error:'))


module.exports = db;