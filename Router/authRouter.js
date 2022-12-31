const express = require('express');
const router = express.Router();

const {join} = require('../control/join')
const {finduser, changePW} = require('../control/find')
const {body} = require("express-validator/check");
const {signout} = require('../control/signout');

// /auth/join

router.post('/join', [
    body('id').exists().trim().isLength({min: 5}).withMessage('fail : id'),
    body('pw').exists().trim().isLength({min: 6}).withMessage('fail : pw'),
    body('email').trim().isEmail().withMessage('fail : Email')
], join);

router.post('/signout', signout);

router.post('/find', [
    body('id').exists().withMessage("fail : id"),
    body('email').exists().trim().isEmail().withMessage("fail : email")
], finduser);

router.post('/change', body('newpw').exists().trim().isLength({min: 6}).withMessage('fail : pw'), changePW);

module.exports = router;

