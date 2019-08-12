"use strict";
const nodemailer = require("nodemailer");

// let testAccount = nodemailer.createTestAccount( ( err, account ) => {
// 	if ( err ) {
// 			console.error( 'Failed to create a testing account. ' + err.message);
// 			return process.exit(1);
// 	}
// });

let transporter = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	auth: {
			user: 'ellen82@ethereal.email',
			pass: 'J73DbGvp4KRzTx71VQ'
	}
});

async function subscribeToNewsletter( email ){
	try {
		let info = await transporter.sendMail({
			from: '"USDT ADmin" <admin@usdep-truth.gov>',
			to: [ email ], 
			subject: "US Department of Truth - Subscription Confirmation",
			text: "Thank you for subscribing to the US Department of Truth Newsletter. You will receive emails until the end of eternity, with no options to cancel or change your email address or subscription settings. But as promised, we will not spam your inbox.",
			html: "<p>Thank you for subscribing to the US Department of Truth Newsletter. You will receive emails until the end of eternity, with no options to cancel or change your email address or subscription settings. But as promised, we will not spam your inbox.</p>"
		});

		console.log("Preview URL: %s", nodemailer.getTestMessageUrl( info ));

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

module.exports = subscribeToNewsletter;