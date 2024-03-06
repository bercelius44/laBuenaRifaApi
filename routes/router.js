// EXPRESS IMPORTS
const express = require("express");
const { check } = require("express-validator");

// UTILS FUNCTIONS IMPORTS
const { checkInput, zeroPad, verifySession } = require("../utils/functions");

// ROUTER FUNCTIONS IMPORTS
const { sendEmail, notFound } = require("./router_functions");

// CODES IMPORT
const codes = require("../utils/codes");

// EXPRESS ROUTER
const router = express.Router();

// ROUTER DEFINITIONS
/**
 * Router DEF
 */
router.use((_, res, next) => {
	console.log("---------------------------------------------------------");
	const date = new Date();
	console.log(
		`Time:  ${date.getFullYear()}-${zeroPad(
			date.getMonth() + 1,
			2
		)}-${zeroPad(date.getDate(), 2)} -- ${zeroPad(
			date.getHours(),
			2
		)}:${zeroPad(date.getMinutes(), 2)}`
	);
	res.setHeader("Content-Type", "application/json");
	next();
});

router
	.route("/api/email")
	.post(
		check("email", "Missing Parameter: email").exists(),
		checkInput,
		sendEmail
	);

router.route("/api/test").get((_, res) => {
	res.status(200).json(codes.LBRC001);
});

router.route("*").post(notFound);

module.exports = router;
