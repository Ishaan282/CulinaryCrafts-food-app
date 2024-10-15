const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');

//routes 
const chat = require('./routes/ishaan_social');
const signup = require('./routes/Samiksha2_post');
const todo = require('./routes/sanjal_todo');
const shop = require('./routes/Sameer_incredients');

// Middleware to parse JSON request bodies with a higher limit
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

//connecting to server
const dbURI = process.env.MONGODB_URI;
const PORT = 5000;

mongoose.connect(dbURI)
    .then((result) => {
        const server = http.createServer(app);
        const io = socketIo(server, {
            cors: {
                origin: "http://localhost:3000", // adjust to your frontend URL
            },
        });

        io.on('connection', (socket) => {
            console.log('a user connected');
        
            socket.on('chat message', (msg) => {
                io.emit('chat message', msg);
            });
        
            socket.on('typing', (data) => {
                socket.broadcast.emit('typing', data);
            });
        
            socket.on('delete message', (messageId) => {
                io.emit('delete message', messageId); // Emit delete message event
            });
        
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
        });
        

        server.listen(PORT, () => {
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
