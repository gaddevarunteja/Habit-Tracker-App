const express = require('express');
const router = express.Router();

const habitController = require('../controllers/habit-controller');

router.post('/create', habitController.createHabit);
router.get('/favorite-habit', habitController.favoriteHabit);
router.get('/remove', habitController.destroyHabit);
router.get('/status-update', habitController.statusUpdate);

module.exports = router;