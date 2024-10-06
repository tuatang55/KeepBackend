// StakeHolder related models -> Done

const mongoose = require("mongoose");
const { StakeholderType } = require("../enum");

// Item schema
const stakeholderSchema = new mongoose.Schema({
    businessID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    stakeholderType: {
        type: Number,
        enum: [
            StakeholderType.CLIENT,
            StakeholderType.SUPPLIER
        ],
        required: true
    },
    stakeholderName: {
        type: String,
        required: true
    },
    stakeholderPhone: {
        type: String,
        required: true
    },
    stakeholderBusinessName: {
        type: String
    },
    stakeholderBusinessPhone: {
        type: String
    },
    address: {
        type: String,
    },
    taxID: {
        type: String,
        required: true,
        unique: true
    },
    imgUrl: {
        type: String
    }
}, { timestamps: true });

const stakeholderCreator = (collectionName) => {
    return mongoose.model("stakeholders", stakeholderSchema, collectionName);
};

module.exports = { stakeholderCreator }; 