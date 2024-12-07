const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const Sock = require('./socket');
require('dotenv').config();

// Initialize express app
const app = express();

// Middleware to parse JSON request bodies with a higher limit
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Import routes
const chat = require('./routes/ishaan_social');
const signup = require('./routes/Samiksha2_post');
const todo = require('./routes/sanjal_todo');
const shop = require('./routes/Sameer_incredients');
const recepies = require('./routes/sanjal_recepies');


module.exports = { app, http, Sock, mongoose, chat, signup, todo, shop, recepies };