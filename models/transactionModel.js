const mongoose = require("mongoose");

const BankAccountTypes = ["CURRENT", "SAVING", "FIXED_DEPOSIT"];

const transaction = mongoose.Schema({
    
});

const bankAccountSchema = mongoose.Schema({
    accountName: String,
    accountNumber: String,
    accountType: BankAccountTypes,
    bankProvider: null //seeding
}, { 
    timestamps: false,
    versionKey: false
});

const ewalletAccountSchema = mongoose.Schema({
    accountName: String,
    accountNumber: String,
    accountType: BankAccountTypes,
    bankProvider: null//seeding
}, { 
    timestamps: false,
    versionKey: false
});

const BankAccount = mongoose.model("bankAccounts", bankAccountSchema);
const EwalletAccount = mongoose.model("ewalletAccounts", ewalletAccountSchema);
module.exports = { BankAccount, EwalletAccount };