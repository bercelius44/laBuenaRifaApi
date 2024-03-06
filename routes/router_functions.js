// CONTROL MODULES IMPORTS
const { emailSend } = require("../controllers/email");
// UTILS MODULE IMPORTS
const { tryCatch } = require("../utils/functions");
//
const codes = require("../utils/codes");

const sendEmail = tryCatch(async (req, res) => {
	console.log("--------------- EMAIL ---------------");
	try {
		emailSend(req.body);
	} catch (error) {
		console.log(error);
	}

	res.status(200).json(codes.LBR001);
});

const notFound = tryCatch(async (_, res) => {
	res.status(404).json({ message: "not_found" });
});

module.exports = {
	sendEmail,
	notFound,
};
