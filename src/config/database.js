import { Sequelize } from "sequelize";

const sequelize = new Sequelize('todolist', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true,
});

module.exports = sequelize;
