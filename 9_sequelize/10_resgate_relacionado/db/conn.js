const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize", "root", "Ruan@123", {
    host: "localhost",
    dialect: "mysql",
});

// try {
//     sequelize.authenticate();
//     console.log("Conectado ao Sequelize");
// } catch (err) {
//     console.log("Não foi possível conectar ao banco de dados, erro:", error);
// }

module.exports = sequelize;
