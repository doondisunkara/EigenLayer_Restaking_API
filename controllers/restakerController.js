const Restaker = require('../models/restaker');

// @desc    Get all restakers
// @route   GET /api/restakers
// @access  Public
exports.getRestakers = async (req, res) => {
    try {
        const restakers = await Restaker.find({});
        res.json(restakers);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};