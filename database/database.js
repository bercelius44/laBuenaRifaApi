const { Sequelize } = require("sequelize");

const { development } = require("../config/config.json");

const sequelize = new Sequelize(
	development.database,
	development.username,
	development.password,
	{
		host: development.host,
		dialect: development.dialect,
		operatorsAliases: false,
	}
);

module.exports = { sequelize };
