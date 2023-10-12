const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home-controller');

router.use('/habits', require('./habits'));

router.get('/', homeController.index);

module.exports = router;