"use strict";
const nodemailer = require("nodemailer");
const SG_PASSWORD = process.env.SG_PASSWORD;

// let testAccount = nodemailer.createTestAccount( ( err, account ) => {
// 	if ( err ) {
// 			console.error( 'Failed to create a testing account. ' + err.message);
// 			return process.exit(1);
// 	}
// });

let transporter = nodemailer.createTransport({
	host: 'smtp.sendgrid.net',
	port: 587,
	auth: {
			user: "apikey",
			pass: SG_PASSWORD
	}
});

const subscribeToNewsletter = async function( email ){
	try {
		let info = await transporter.sendMail({
			from: '"USDT ADmin" <admin@usdep-truth.gov>',
			to: [ email ], 
			subject: "US Department of Truth - Subscription Confirmation",
			text: "Thank you for subscribing to the US Department of Truth Newsletter. You will receive emails until the end of eternity, with no options to cancel or change your email address or subscription settings. But as promised, we will not spam your inbox.",
			html: "<p>Thank you for subscribing to the US Department of Truth Newsletter. You will receive emails until the end of eternity, with no options to cancel or change your email address or subscription settings. But as promised, we will not spam your inbox.</p>"
		});

		let message = {
			message: "Thank you, Citizen, for staying informed. USDT promises not to spam your inbox.",
			status: "success"
		}

		return message;

	} catch ( err ) {
		console.log( err );

		let message = {
			message: "There was an error in subscribing to the USDT newsletter.",
			status: "failure"
		}

		return message;
	}
}

const sendAccountVerificationEmail = async function( verificationToken, email ) {
	try {
		let info = await transporter.sendMail({
			from: '"USDT ADmin" <admin@usdep-truth.gov>',
			to: [ email ], 
			subject: "US Department of Truth - Verify Registration",
			text: `
				Thank you for registering an account with the US Department of Truth. You will receive emails until the end of eternity, with no options to cancel or change your email address or subscription settings. But as promised, we will not spam your inbox. Please follow the link below to confirmation your registration. https://usdt-satire.herokuapp.com/register/${ verificationToken }
			`,
			html: `
				<p>Thank you for registering an account with the US Department of Truth. You will receive emails until the end of eternity, with no options to cancel or change your email address or subscription settings. But as promised, we will not spam your inbox. Please follow the link below to confirmation your registration.</p>
				<p><a href="https://usdt-satire.herokuapp.com/register/${ verificationToken }">
					Confirm Registration
				<a></p>
			`
		});

		console.log("Preview URL: %s", nodemailer.getTestMessageUrl( info ));

		let message = {
			message: "Please check your inbox to confirm your account registration.",
			status: "success"
		}

		return message;

	} catch ( err ) {
		console.log( err );

		let message = {
			message: "There was an error in registering with the USDT.",
			status: "failure"
		}

		return message;
	}
}

const sendMail = {
	sendAccountVerificationEmail: sendAccountVerificationEmail,
	subscribeToNewsletter: subscribeToNewsletter
}

module.exports = sendMail;