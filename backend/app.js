const express = require('express');
const app = express(); //#express 
const mongoose = require('mongoose'); //#mongoose
require('dotenv').config(); // Load environment variables from .env file

//connecting to server
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(3000, () => {
            console.log('Server connected!');
        });
    })
    .catch((error) => {
        console.log("Unable to connect to the database", error);
    });

app.get('/', (req, res) => {
    res.send('Amaricaya Halo :D');
});
//DON'T YOU DARE EDIT THE ABOVE PORTION or else i'll send 3 mouse at your location

//!please start your code from here :D