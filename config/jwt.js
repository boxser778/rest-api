const jwt = require("jsonwebtoken");
const config = require("config");

//create token
const generateToken = (data) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            data,
            config.get("jwtSecretKey"), {
                expiresIn: "10d"
            },
            (err, token) => {
                if (err) reject(err);
                else resolve(token);
            }
        );
    });
};

//check if token is valid
const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.get("jwtSecretKey"), (err, decoded) => {
            if (err) reject(err);
            else resolve(decoded);
        });
    });
};

module.exports = {
    generateToken,
    verifyToken,
};