const express = require("express");

const authMiddleware = require("../../middleware/auth");

const authRouter = require("./auth");
const userRouter = require("./user");
const cardRouter = require("./cards");
const router = express.Router();

router.use("/auth", authRouter);
router.use("/card", authMiddleware, cardRouter);
router.use("/user", authMiddleware, userRouter);


module.exports = router;