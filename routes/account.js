const express = require("express");
const router = express.Router();
const { updateUser, deleteUser }  = require("../controllers/accountController");
const verifyJWT = require("../middlewares/verifyJWT");

router.put("/user/:id", verifyJWT, updateUser);
router.delete("/user/:id", verifyJWT, deleteUser);

module.exports = router;