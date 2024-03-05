// CONTROL FUNCTIONS

// CONTROL MODULES IMPORTS

// UTILS MODULE IMPORTS
const { tryCatch } = require("../utils/functions");
const codes = require("../utils/codes");

const notFound = tryCatch(async (_, res) => {
	res.status(404).json({ message: "not_found" });
});

module.exports = {
	notFound,
};
