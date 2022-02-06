const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
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
});

const Users = mongoose.model("Users", usersSchema);

const insertUser = (name, email, password) => {
    const user = new Users({
        name,
        email,
        password,
    });
    return user.save();
};

const updateUserById = (name, email, password) => {
    Users.findById("61e6af387c1af7af12d66c50").then((userDoc) => {
        userDoc.name = name;
        userDoc.email = email;
        userDoc.password = password;
        userDoc.save();
    });
};

const selectUserByEmail = (email) => {
    return Users.find({
        email: email
    });
};

const deleteUserById = (id) => {
    return Users.deleteOne({
        _id: id
    });
};

const selectAllUsers = () => {
    return Users.find({});
};

module.exports = {
    insertUser,
    updateUserById,
    deleteUserById,
    selectAllUsers,
    selectUserByEmail,
};