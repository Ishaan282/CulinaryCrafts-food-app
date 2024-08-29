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

app.set('view engine', 'ejs'); //setting view engine 
//DON'T YOU DARE EDIT THE ABOVE PORTION or else i'll send Jerry at your location

//!please start your code from here :D



//!handling error page 
// Handling 404 errors
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

// Error-handling middleware
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send('Something broke!');
});