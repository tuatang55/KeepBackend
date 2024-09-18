const express = require("express");
const router = express.Router();
const { login, logout } = require("../controllers/authController");
const { handleRefreshToken } = require("../controllers/refreshTokenController");

router.post("/auth/sign_in", login);
router.get("/auth/logout",  logout); // don't need to verify jwt to logout
router.get("/refresh", handleRefreshToken);

module.exports = router;