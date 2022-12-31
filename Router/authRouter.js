const express = require('express');
const router = express.Router();

const {join} = require('../control/join')
// /auth/join

router.post('/join', join);

module.exports = router;
