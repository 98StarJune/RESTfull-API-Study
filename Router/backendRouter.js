const express = require('express');
const {getvalue} = require("../control/getvalue");
const {addvalue} = require("../control/addvalue");
const router = express.Router();

router.get('/get', getvalue);
router.post('/add', addvalue);

module.exports = router;