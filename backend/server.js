const express = require('express');
const cors = require('cors');
const db = require('./db');

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
