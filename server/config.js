const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const Sock = require('./socket');
const cors = require('cors');
const session = require('express-session'); 
require('dotenv').config();

const app = express();


app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
})); //cors is used to allow cross-origin requests from the frontend


app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, 
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 
    }
}));

// console.log(process.env.SESSION_SECRET)

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


const chat = require('./routes/social.routes');
const signup = require('./routes/Samiksha2_post'); //route for log-in
const todo = require('./routes/sanjal_todo');
const customRecipeRoutes = require('./routes/customRecipe.routes');
// const shop = require('./routes/sanya_incredients');
// const recepies = require('./routes/sanjal_recepies');

module.exports = { app, http, Sock, mongoose, chat, signup, todo, customRecipeRoutes};