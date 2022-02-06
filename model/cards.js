const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;

const cardsSchema = new Schema({
    bizName: String,
    bizDescription: String,
    bizPostal: {
        type: String,
        required: true
    },
    bizNumber: String,
    bizImage: String,
    owner: {
        type: Schema.Types.ObjectId,
        required: true
    }

});

const Cards = mongoose.model("Cards", cardsSchema);

const insertCard = (bizName, bizDescription, bizPostal, bizNumber, bizImage, owner) => {
    const newCard = new Cards({
        bizName,
        bizDescription,
        bizPostal,
        bizNumber,
        bizImage,
        owner
    });
    return newCard.save();
};

const selectAllCardsByOwner = (idOwner) => {
    return Cards.find({
        // owner: new ObjectId(idowner)
        bizOwner: idOwner
    })
}

const updateCardById = (bizName, bizDescription, bizPostal, bizNumber, bizImage, id) => {
    return Cards.findByIdAndUpdate(id, {
        bizName,
        bizDescription,
        bizPostal,
        bizNumber,
        bizImage

    }, {
        returnDocument: "after"
    });
}

const selectCardById = (_id) => {
    return Cards.find({
        _id: _id
    })
};

const deleteCardById = (id) => {
    return Cards.findByIdAndDelete({
        _id: id
    })
};

module.exports = {
    insertCard,
    selectAllCardsByOwner,
    updateCardById,
    deleteCardById,
    selectCardById
}