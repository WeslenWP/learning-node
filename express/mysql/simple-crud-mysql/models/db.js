
const Sequelize = require('sequelize');

const user = 'root';
const pass = '';

const sequelize = new Sequelize('postapp', user, pass, {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}