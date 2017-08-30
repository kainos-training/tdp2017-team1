// This file will handle sending notifications to the email address of
// the user who booked into the event
const nodemailer = require('nodemailer');
const emailConfig = require('./email.config.json');

nodemailer.createTestAccount((err, account) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.secure, // true for 465, false for other ports,
    requireTLS: true,
    auth: {
      user: emailConfig.email, // generated ethereal user
      pass: emailConfig.password  // generated ethereal password
    }
  });

  // setup email data with unicode symbols
    let mailOptions = {
      from: '"Map Team 1 👻" <kainostdpteam1@gmail.com>', // sender address
      to: 'j.thomson@kainos.com, n.oboyle@kainos.com, c.mullan@kainos.com, r.taylor@kainos.com', // list of receivers
      subject: 'Your Calendar Booking ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>' // html body
    };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});


exports.sendNotification = function(emailAddress, callback) {
  // send notification to users email address
}
