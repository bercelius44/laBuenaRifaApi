const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

const NumRifas = require("./num_rifas");

const User = sequelize.define("Users", {
	id: {
		allowNull: false,
		autoIncrement: false,
		primaryKey: true,
		type: DataTypes.STRING,
	},
	firstName: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	lastName: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	email: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	cellphone: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	address: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	city: {
		allowNull: false,
		type: DataTypes.STRING,
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

User.hasMany(NumRifas, {
	foreignKey: "userId",
	sourceKey: "id",
});

NumRifas.belongsTo(User, {
	foreignKey: "userId",
	targetKey: "id",
});

module.exports = User;
