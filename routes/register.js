const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/accountController");

/*
{
    "email": "SOME_EMAIL", (test@test.com)
    "user": "SOME_USERNAME",
    "pwd": "SOME_PASSWORD",
}
*/
router.post("/register", registerUser);

module.exports = router;