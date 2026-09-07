const express = require('express')
const urlcontroller = require('../controllers/urlcontrollers')

const router = express.Router();

router.post('/', urlcontroller)

module.exports = router;

