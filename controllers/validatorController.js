const Validator = require('../models/validator');

// @desc    Get all validators with detailed statistics
// @route   GET /api/validators
// @access  Public
exports.getValidators = async (req, res) => {
    try {
        const validators = await Validator.find({});
        res.json(validators);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};