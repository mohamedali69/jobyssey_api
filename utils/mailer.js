// email.js
const nodemailer = require('nodemailer');

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.SENDER_MAIL,
    pass: process.env.SENDER_PASSWORD,
  },
});

function sendEmail(to, subject, text) {
  const mailOptions = {
    from: process.env.SENDER_MAIL,
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions)
    .then((info) => {
      console.log('Email sent:', info.response);
      return info.response;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

module.exports = { sendEmail };
