const express = require('express');
const router = express.Router();
const validatorController = require('../controllers/validatorController');

// GET /validators : Returns a list of validators with their detailed statistics. [7]
router.get('/', validatorController.getValidators);

module.exports = router;