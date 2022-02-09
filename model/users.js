const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    id: Schema.Types.ObjectId,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    biz: Boolean
});

const Users = mongoose.model("Users", usersSchema);

const insertUser = (name, email, password, biz) => {
    const user = new Users({
        name,
        email,
        password,
        biz
    });
    return user.save();
};

const selectUserByEmail = (email) => {
    return Users.find({
        email: email
    });
};

const findUserById = (_id) => {
    return Users.findById(_id = id)
};

const selectAllUsers = () => {
    return Users.find({});
};

module.exports = {
    insertUser,
    selectAllUsers,
    selectUserByEmail,
    findUserById
};