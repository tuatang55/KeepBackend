const mongoose = require("mongoose");

// we will create a schema, basically the structure of a document.
// should seperate user and account to different collections
const userSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String,
    refreshtoken: String
}, { 
    timestamps: false,
    versionKey: false
});

const accountSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    activeRoles: [{
        business: String, 
        role: String 
    }],
    userId: mongoose.Schema.Types.ObjectId
}, { timestamps: true });

const User = mongoose.model("users", userSchema);
const Account = mongoose.model("accounts", accountSchema);
module.exports = { User, Account };