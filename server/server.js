const express = require('express');
const app = express(); //#express 
const mongoose = require('mongoose'); //#mongoose
require('dotenv').config(); // Load environment variables from .env file
const bodyParser = require('body-parser'); // Import body-parser

//routes 
const chat = require('./routes/ishaan_social'); // Import chat routes
const signup = require('./routes/Samiksha2_post'); 
const todo = require('./routes/sanjal_todo'); // Import todo routes
const shop = require('./routes/Sameer_incredients');

// Middleware to parse JSON request bodies with a higher limit
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

//connecting to server
const dbURI = process.env.MONGODB_URI;
const PORT = 5000;
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(PORT, () => {
            console.log('Server connected!');
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Unable to connect to the database", error);
    });

app.get('/', (req, res) => {
    res.send('Amaricaya Halo :D');
});

//#DON'T YOU DARE EDIT THE ABOVE PORTION or else i'll send Jerry at your location

//please start your code from here :D

//$Ishaan part
app.use('/Social', chat); 

//$Samiksha part
app.use('/api/Signup', signup ); 

//$sanjal part 
app.use('/Recipe/todo', todo);

//$Sameer part
app.use('/shop',shop);

//!handling error page 
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

//!middleware for handling errors
app.use((err, req, res, next) => {
    console.error(err.stack); 

    res.status(500).json({
        error: {
            message: 'Internal Server Error'
        }
    });
});