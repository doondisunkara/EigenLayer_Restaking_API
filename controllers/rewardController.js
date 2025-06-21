const Reward = require('../models/reward');

// @desc    Get reward information for a specific wallet address
// @route   GET /api/rewards/:address
// @access  Public
exports.getRewardsByWalletAddress = async (req, res) => {
    try {
        const walletAddress = req.params.address.toLowerCase(); // Ensure consistent casing
        const rewards = await Reward.findOne({ walletAddress: walletAddress });

        if (!rewards) {
            return res.status(404).json({ msg: 'No rewards found for this wallet address.' });
        }

        res.json(rewards);
    } catch (err) {
        console.error(err.message);
        // Check for invalid address format if needed, though Mongoose will likely handle it.
        if (err.kind === 'ObjectId') { // Example for invalid ID format, adjust for address validation
             return res.status(400).json({ msg: 'Invalid wallet address format.' });
        }
        res.status(500).send('Server Error');
    }
};