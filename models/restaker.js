const mongoose = require('mongoose');

const RestakerSchema = new mongoose.Schema({
    userAddress: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    amountRestaked: {
        type: Number, // Assuming stETH amount can be represented as a number (e.g., in ETH units)
        required: true
    },
    targetAvsOperatorAddress: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

RestakerSchema.index({ userAddress: 1 }); // Index for efficient querying [4]

module.exports = mongoose.model('Restaker', RestakerSchema);