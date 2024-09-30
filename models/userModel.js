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

// seperation of user and account for security and quering time reasons
const businessRoles = ["BUSINESS_ADMIN", "ACCOUNTANT", "VIEWER"]

const userAccountSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    activeRoles: [{
        businessID: String, 
        role: {
            type: String,
            enum: businessRoles
        }
    }],
    userID: mongoose.Schema.Types.ObjectId
}, { timestamps: true });

const User = mongoose.model("users", userSchema);
const Account = mongoose.model("accounts", userAccountSchema);
module.exports = { User, Account };