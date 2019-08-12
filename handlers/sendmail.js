"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(){
  let testAccount = await nodemailer.createTestAccount( ( err, account ) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
		}
	});

  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ellen82@ethereal.email',
        pass: 'J73DbGvp4KRzTx71VQ'
    }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"USDT ADmin" <admin@usdep-truth.gov>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "US Department of Truth - Subscription", // Subject line
    text: "test", // plain text body
    html: "<b>test</b>" // html body
  });

  console.log( "Message sent: %s", info.messageId );

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);