const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

console.log(process.env.PORT);
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
        res.send('hello');
    });


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});