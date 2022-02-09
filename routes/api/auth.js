const express = require("express");
const bcrypt = require("../../config/bcrypt");
const UserSchema = require("../../validation/users");
const UserModel = require("../../model/users");
const jwt = require("../../config/jwt");
const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const value = await UserSchema.schemaSignup.validateAsync(req.body, {
            abortEarly: false,
        });
        value.password = await bcrypt.createHash(value.password);
        const userExistenceCheck = await UserModel.selectUserByEmail(value.email);
        if (userExistenceCheck.length != 0) {
            throw res.json({
                status: 400,
                msg: "email already exists"
            });
        } else {
            await UserModel.insertUser(value.name, value.email, value.password, value.biz = false);
            const pullExistUser = await UserModel.selectUserByEmail(value.email);
            value.id = pullExistUser[0]._id;
            res.json({
                status: 200,
                msg: [value.id, value.email, value.name]
            });

        }
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

router.post("/login", async (req, res) => {
    try {
        const value = await UserSchema.schemaLogin.validateAsync(req.body, {
            abortEarly: false,
        });
        const userData = await UserModel.selectUserByEmail(value.email);
        if (userData.length != 0) {
            const resBcrypt = await bcrypt.cmpHash(
                value.password,
                userData[0].password
            );
            if (resBcrypt) {
                const jwtToken = await jwt.generateToken({
                    email: value.email
                });
                res.json({
                    status: "ok",
                    token: jwtToken
                });
                return;
            }
        }

        res.json({
            status: "error",
            msg: "please check your email or password"
        });
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});

module.exports = router;