const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const NumRifas = require("./num_rifas");

const Rifas = sequelize.define("Rifas", {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	description: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	photo: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	ticketValue: {
		allowNull: false,
		type: DataTypes.INTEGER,
	},
	minTicketsNumber: {
		allowNull: false,
		type: DataTypes.INTEGER,
	},
	ticketsRange: {
		allowNull: false,
		type: DataTypes.INTEGER,
	},
	status: {
		allowNull: false,
		type: DataTypes.INTEGER,
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

Rifas.hasMany(NumRifas, {
	foreignKey: "rifaId",
	sourceKey: "id",
});

NumRifas.belongsTo(Rifas, {
	foreignKey: "rifaId",
	targetKey: "id",
});

module.exports = Rifas;
