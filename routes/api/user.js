const express = require("express");

const UserModel = require("../../model/users");

const router = express.Router();

/* GET users listing. */
router.get("/", async (req, res) => {
    try {
        const userData = await UserModel.selectUserByEmail(req.jwtData.email);
        res.json(userData);
    } catch (err) {
        res.json({
            status: "error",
            err
        });
    }
});

/* DELETE users */
router.delete("/", async (req, res) => {
    try {
        const userData = await UserModel.selectUserByEmail(req.jwtData.email);
        if (userData.length > 0) {
            UserModel.deleteUserById(userData[0]._id);
            res.json({
                msg: "user deleted"
            });
        } else {
            res.json({
                msg: "user was not there"
            });
        }
    } catch (err) {
        res.json({
            status: "error",
            err
        });
    }
});

module.exports = router;