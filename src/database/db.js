const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const user = process.env.USER_DB;
const password = process.env.PASSWORD_DB;
const endereco = process.env.HOST_DB;
const database = process.env.DB;

const sequelize = new Sequelize(database, user, password, {
    host: endereco,
    dialect: "mssql",
});

async function verifyConnect() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}


module.exports = {
    sequelize,
    verifyConnect
}