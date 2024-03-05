const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const NumRifas = sequelize.define("NumRifas", {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	ticketNumber: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	status: {
		allowNull: false,
		type: DataTypes.BOOLEAN,
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE,
	},
	updatedAt: {
		allowNull: false,
		type: DataTypes.DATE,
	},
});

module.exports = NumRifas;
