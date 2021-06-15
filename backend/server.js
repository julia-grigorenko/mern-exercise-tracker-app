const express = require('express');
const Logger = require('./lib/logger.js');
const cors = require('cors');
const db = require('./db');

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
app.get("/logger", (req, res) => {
    Logger.error("This is an error log");
    Logger.warn("This is a warn log");
    Logger.info("This is a info log");
    Logger.http("This is a http log");
    Logger.debug("This is a debug log");
  
    res.send("Hello world");
  });

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
