const express = require('express');
const router = express.Router();

router.use('/habits', require('./habits'));

module.exports = router;