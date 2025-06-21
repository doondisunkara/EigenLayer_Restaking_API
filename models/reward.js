const mongoose = require('mongoose');

const RewardSchema = new mongoose.Schema({
    walletAddress: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    totalRestakingRewardsReceived: { // Cumulative rewards received by the wallet [7]
        type: Number,
        required: true
    },
    breakdownPerValidator: [ // Detailed breakdown of rewards received from each specific validator/operator [7]
        {
            operatorAddress: { type: String, required: true, lowercase: true, trim: true },
            amount: { type: Number, required: true },
            timestamp: { type: Date } // Optional, but highly desirable [7]
        }
    ],
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

RewardSchema.index({ walletAddress: 1 }); // Index for efficient querying [4]

module.exports = mongoose.model('Reward', RewardSchema);