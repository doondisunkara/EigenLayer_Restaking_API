const express = require('express');
const router = express.Router();
const restakerController = require('../controllers/restakerController');

// GET /restakers : Returns a list of restakers with their restaked amount and target validator. [7]
router.get('/', restakerController.getRestakers);

module.exports = router;