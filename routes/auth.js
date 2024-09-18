const express = require("express");
const router = express.Router();
const { login, logout } = require("../controllers/authController");
const { handleRefreshToken } = require("../controllers/refreshTokenController");

/* 
    POST api
{
    "user": "SOME_USERNAME or SOME_EMAIL",
    "pwd": "SOME_PASSWORD"
}
*/
router.post("/auth/sign_in", login);

/* 
    GET api
    needed cookie
*/
router.get("/auth/logout",  logout); // don't need to verify jwt to logout

/* 
    GET api
    needed cookie
*/
router.get("/refresh", handleRefreshToken);

module.exports = router;