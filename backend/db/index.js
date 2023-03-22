const logger = require('../lib/logger.js');
const mongoose = require('mongoose');
const dbname = process.env.MONGO_DB
const user = process.env.MONGO_DB_USERNAME
const password = process.env.MONGO_DB_PWD

//for using with docker containers

//for using on localhost
const uri = `mongodb://${user}:${password}@mongo:27017/${dbname}`;
//const databaseName = "mern-exercise-tracker";
const mongoClientOptions = { 
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useUnifiedTopology: true,
        dbName: dbname
    };
mongoose
    .connect(uri, mongoClientOptions)
    .then((response) => {
        logger.info('Connected to the database: ' + mongoClientOptions.dbName);
        return response;
    })
    .catch(e => {
        logger.error('Connection error: ', e.message)
    });

const db = mongoose.connection;

db.once('open', () => {
    logger.info("MongoDB database connection established successfully")
   })
  .on('error', logger.error.bind(console, 'MongoDB connection error:'))


module.exports = db;
