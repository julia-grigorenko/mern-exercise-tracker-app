const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

//for local environment
/*const uri = "mongodb://localhost:27017/mern-exercise-tracker";*/ 
//for working in a container environment
const uri = 'mongodb://mongodb:27017';
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
  );
  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  })

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.use('/exercises', exercisesRouter);
  app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
