const express = require('express');
const router = express.Router();

const {join, joinvalidator} = require('../control/join')
const {body} = require("express-validator/check");

// /auth/join

router.post('/join',[
    body('id').exists().trim().isLength({min : 5}).withMessage('fail : id length'),
    body('pw').exists().trim().isLength({min : 6}).withMessage('fail : pw length'),
    body('email').trim().isEmail().withMessage('fail : not Email')
], join);

module.exports = router;
