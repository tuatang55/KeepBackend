const mongoose = require("mongoose");

const businessSchema = mongoose.Schema({
    businessName: String,
    businessBranch: String,
    businessAddr: String,
    businessContact: String,
    businessTaxID: String,
    businessLogoUrl: String // how would you send the image from frontend to backend. I wondered.
}, {
    timestamps: false,
    versionKey: false
});

const Business = mongoose.model("business", businessSchema);
module.exports = { Business };