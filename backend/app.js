const express = require('express');
const app = express(); //#express 
const mongoose = require('mongoose'); //#mongoose

//$ mongoose connection
const dbURI = 'mongodb+srv://ishaan:water_bottle@cluster0.rdcay.mongodb.net/sandwitch?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(3000, () => {
            console.log('Server connected!');
        });
    })
    .catch((error) => {
        console.log("Unable to connect to the database", error);
    });

app.get('/',(req,res) => {
    res.send('Amaricaya Halo :D');
})


