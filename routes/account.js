const express = require("express");
const router = express.Router();
const { updateAccount, deleteAccount, createAccount, viewAccount }  = require("../controllers/accountController");
const verifyJWT = require("../middlewares/verifyJWT");

/*
{
}
*/
router.get("/user", verifyJWT, viewAccount);
router.post("/user", verifyJWT, createAccount);
router.put("/user", verifyJWT, updateAccount);
router.delete("/user", verifyJWT, deleteAccount);

module.exports = router;