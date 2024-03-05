// IMPORTS
const { validationResult } = require("express-validator");
const codes = require("./codes");

// UTILITY FUNCITONS
/**
 * It checks if the input is valid, if not, it returns an error message.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 * @returns The errors.array() is an array of objects.
 */
const checkInput = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({
			...codes.OKYC002,
			message: errors.array(),
		});
	}
	next();
};

/**
 * Plade zero padding for a given num string.
 * @param num number string.
 * @param places zero padding places.
 * @returns string with zedo padding places.
 */
const zeroPad = (num, places) => String(num).padStart(places, "0");

/**
 * Check for an error in the API.
 * @param error - The error object.
 * @param req - The request object.
 * @param res - The response object.
 */
const errorHandler = (error, _, res) => {
	error.statusCode = error.statusCode || 500;
	error.status = error.status || "error";
	console.log(error);
	res.status(error.statusCode).json(codes.OKYC000);
};

/**
 * Checks overe a function to see if any code error is present.
 * @param fn Function to check into.
 */
const tryCatch = (fn) => (req, res, next) =>
	Promise.resolve(fn(req, res, next)).catch(next);

module.exports = { checkInput, zeroPad, errorHandler, tryCatch };
