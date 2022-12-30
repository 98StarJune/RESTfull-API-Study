const express = require('express');
const bodyparser = require('body-parser');

const backendRouter = require('./Routers/backendRouter');
const authRouter = require('./Routers/authRouter');

const app = express();

app.use(bodyparser.json());
app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST, PUT, PATH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/backend', backendRouter);
app.use('/auth', authRouter);

app.listen(8080);