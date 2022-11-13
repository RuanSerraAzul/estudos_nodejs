const { DataTypes } = require("sequelize");

const db = require("./../db/conn");
const user = require("./User");

const Address = db.define("Address", {
    street: {
        type: DataTypes.STRING,
        required: true,
    },
    number: {
        type: DataTypes.STRING,
        required: true,
    },
    city: {
        type: DataTypes.STRING,
        required: true,
    },
});

Address.belongsTo(user);

module.exports = Address;
