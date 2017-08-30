// This file will handle sending notifications to the email address of
// the user who booked into the event
const nodemailer = require('nodemailer');
const emailConfig = require('./email.config.json');

exports.sendNotification = function(emailAddress) {

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
      to: emailAddress, // list of receivers
      subject: 'Your Calendar Booking ✔', // Subject line
      text: 'You are booked in', // plain text body
      html: '<b>You are booked in!</b>' // html body
    };

    // send notification to users email address
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });
  });
}