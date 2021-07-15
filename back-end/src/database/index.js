const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Funcionarios = require("../models/Funcionarios");

const connection = new Sequelize(dbConfig);

Funcionarios.init(connection);

module.exports = connection;
