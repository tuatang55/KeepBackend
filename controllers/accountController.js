// logics about accounts
// NOTED : Username validation is not yet implement (to check if username has special characters which will make it vulnerable to injection or other attack)
const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const validateEmail = require("../utils/emailValid")

// registration will only make a new user documentation with unique username
// assuming password checking and forbidden username (in case of injection) were done in the front end already
// not done yet. Might have to rewrite to have more logic like account creation
const registerUser = async (req, res) => {
    try {
        const { user, email, pwd } = req.body;
        if (!user || !email || !pwd) return res.status(400).send("Email, username and password are required");
        if (!validateEmail(email)) return res.status(400).send("Email format is incorrect"); // check if email is in the correct format
        const foundUser = await User.findOne({ $or: [ {"username": user}, {"email": email}]}).exec(); // findout if the user is already in the system
        if (foundUser) return res.send("User is already in the system");
        
        const salt = await bcrypt.genSalt(10);
        const hashPwd = await bcrypt.hash(pwd, salt); // hash/encrypt password for security reason
        const newUser = new User({
            "email": email,
            "username": user,
            "password": hashPwd,
            "refreshtoken": ""
        });
        if (!newUser) return res.status(500);
        await newUser.save(); // save new user to the database
        res.status(200).send("Registration complete!");
    }
    catch(err){
        console.log(err);
        res.status(500).send("Error at register user endpoint");
    }
};

const updateUser = async (req, res) => {
    try {
        res.send("Update user endpoint is still in progress");
    }
    catch(err){
        console.log(err);
        res.status(500).send("Error at update user endpoint");
    }
}

// can't do this now. Need logout to be done first
const deleteUser = async (req, res) => {
    try {
        // const id = req.params.id;
        // const foundUser = await User.findOneAndDelete({"_id": `${id}`});
        // console.log(foundUser);
        res.send("Delete user endpoint is still in progress");
    }
    catch(err){
        console.log(err);
        res.status(500).send("Error at delete user endpoint");
    }
}

module.exports = { registerUser, updateUser, deleteUser };