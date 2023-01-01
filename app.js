const express = require('express');

const mongoose = require('mongoose');

const backendRouter = require('./Router/backendRouter');
const authRouter = require('./Router/authRouter');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
    next();
})
app.use('/backend', backendRouter);
app.use('/auth', authRouter);
app.use((req, res, next) =>{
    res.status(404).json({
        message : "Not Found"
    })
})
mongoose.connect(
    'mongodb+srv://root:test12345@cluster0.mnsjiqy.mongodb.net/?retryWrites=true&w=majority',
    {
        dbName : "nodeTest"
    })
    .then(resault =>{
        app.listen(port);
    })
    .catch(err => {
        console.log(err)
    })