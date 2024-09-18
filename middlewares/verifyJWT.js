// jwt verification middleware
const jwt = require("jsonwebtoken");
require("dotenv").config();

// put access token in bearer authentication
const verifyJWT = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.sendStatus(401);
    const token = authHeader.split(" ")[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token, send 403 forbidden
            req.userID = decoded.userID;
            next();
        }
    );
}

module.exports = verifyJWT;