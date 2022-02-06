const express = require('express');
const router = express.Router();

const cardsModel = require("../../model/cards")
const userModel = require("../../model/users")
const cardsSchema = require("../../validation/cards")


router.get("/", async (req, res) => {
    try {
        const userData = await userModel.selectUserByEmail(req.jwtData.email);
        console.log(userData);
        const cardsData = await cardsModel.selectAllCardsByOwner(userData[0]._id);
        console.log("cardsData", cardsData);
        res.json(cardsData)
    } catch (err) {
        console.log(err);
    }
})

router.get("/one", async (req, res) => {
    try {
        const value = await cardsSchema.updateCardSchema.validateAsync(req.body, {
            abortEarly: false,
        });
        const cardData = await cardsModel.selectCardById(value._id);
        res.json(cardData)
    } catch (err) {
        console.log(err);
    }
})


router.post('/', async (req, res) => {
    try {
        const value = await cardsSchema.createCardSchema.validateAsync(req.body, {
            abortEarly: false,
        });
        const userData = await userModel.selectUserByEmail(req.jwtData.email);
        console.log("this is use Data:", userData);
        const cardsData = await cardsModel.insertCard(value.bizName, value.bizDescription, value.bizPostal, value.bizNumber, value.bizImage, userData[0]._id)

        console.log("cardsData", cardsData);
        console.log("userData", userData);
        res.json({
            status: "ok",
            msg: "created"
        });
    } catch (err) {
        console.log("error was found", err);
        res.status(400).json(err);

    }
})

router.put("/", async (req, res) => {
    try {
        const value = await cardsSchema.updateCardSchema.validateAsync(req.body, {
            abortEarly: false,
        });

        const cardData = await cardsModel.updateCardById(value.bizName, value.bizDescription, value.bizPostal, value.bizNumber, value.bizImage, value._id);
        console.log(cardData);
        if (cardData) {
            res.json({
                status: "ok",
                msg: "card information changes successfuly",
            });
        } else {
            throw new Error({
                status: "falied",
                msg: "cant find this id"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
})

router.delete("/", async (req, res) => {
    try {
        const value = await cardsSchema.updateCardSchema.validateAsync(req.body, {
            abortEarly: false,
        });
        const cardData = await cardsModel.deleteCardById(value._id);
        if (cardData.length != 0) {
            res.json({
                msg: "card deleted"
            });
        } else {
            res.json({
                msg: "card was not there"
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