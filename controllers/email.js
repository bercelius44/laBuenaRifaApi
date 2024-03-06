const nodemailer = require("nodemailer");

const { originalEmail } = require("../config/config.json");
const { html } = require("../utils/tickets_html");

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: originalEmail.email,
		pass: originalEmail.email_key,
	},
});

const emailSend = ({ email }) => {
	const mailOptions = {
		from: originalEmail.email,
		to: email,
		subject: "Aquí tienes tus Números.",
		html: html,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};

module.exports = {
	emailSend,
};
