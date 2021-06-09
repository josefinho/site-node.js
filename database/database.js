const Sequelize = require('sequelize');
const connection = new Sequelize('perguntas', 'user', 'user', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = connection;
