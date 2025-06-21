const mongoose = require('mongoose');

const ValidatorSchema = new mongoose.Schema({
    operatorAddress: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    totalDelegatedStake: {
        type: Number, // Total amount of stETH (or other LSTs/native ETH) delegated [6]
        required: true
    },
    slashHistory: [ // Details of any slashing events [6]
        {
            timestamp: { type: Date },
            amount: { type: Number },
            reason: { type: String }
        }
    ],
    validatorStatus: { // Current status of the validator (e.g., active, jailed, slashed) [6]
        type: String,
        required: true
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Validator', ValidatorSchema);