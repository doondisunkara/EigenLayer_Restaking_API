const express = require('express');
const router = express.Router();
const rewardController = require('../controllers/rewardController');

// GET /rewards/:address : Returns reward information for a specific wallet address. [7]
router.get('/:address', rewardController.getRewardsByWalletAddress);

module.exports = router;