const express = require('express');
const logger = require('./lib/logger.js');
const morganMiddleware = require('./lib/morganMiddleware.js');
const cors = require('cors');
const db = require('./db');

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.use(morganMiddleware);
//to test logger functionality
app.get("/logger", (req, res) => {
    logger.error("This is an error log");
    logger.warn("This is a warn log");
    logger.info("This is a info log");
    logger.http("This is a http log");
    logger.debug("This is a debug log");
  
    res.send("Hello world");
  });

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    logger.info(`Server is running on port: ${port}`);
});
