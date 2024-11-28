const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const http = require('http');
const Sock = require('./socket');

//routes 
const chat = require('./routes/ishaan_social');
const signup = require('./routes/Samiksha2_post');
const todo = require('./routes/sanjal_todo');
const shop = require('./routes/Sameer_incredients');


//connecting to server
const dbURI = process.env.MONGODB_URI;
const PORT = 5000;

mongoose.connect(dbURI)
    .then((result) => {
        const server = http.createServer(app);

        //#socket.io
        Sock(server);

        server.listen(PORT, () => {
            console.log('Server connected!');
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Unable to connect to the database", error);
    });

// Middleware to parse JSON request bodies with a higher limit
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));



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
