const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


const backendRouter = require('./Router/backendRouter');
const authRouter = require('./Router/authRouter');

const app = express();
const port = 8080;

app.use(bodyparser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, PUT, PATH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/backend', backendRouter);
app.use('/auth', authRouter);

mongoose.connect('mongodb+srv://root:part71998@@cluster0.mnsjiqy.mongodb.net/?retryWrites=true&w=majority')
    .then(resault =>{
        app.listen(port);
    })
    .catch(err => {
        console.log(err)
    })