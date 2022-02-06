const Joi = require("joi");

const newCardObj = {
    bizName: Joi.string().pattern(new RegExp("^[a-zA-Z]")).messages({
        "string.base": "bizName must be a string Type"
    }),
    bizDescription: Joi.string().messages({
        "string.base": "bizDescription must be a string Type"
    }),
    bizPostal: Joi.string().messages({
        "string.base": "bizPostal must be a string Type"
    }),
    bizNumber: Joi.string().messages({
        "string.base": "bizNumber must be a string Type"
    }),
    bizImage: Joi.string().messages({
        "string.base": "bizImage must be a string Type"
    }),
}

const updateCardObj = {
    _id: Joi.string().required(),
    ...newCardObj
}

const createCardSchema = Joi.object(newCardObj);
const updateCardSchema = Joi.object(updateCardObj);

module.exports = {
    createCardSchema,
    updateCardSchema
}