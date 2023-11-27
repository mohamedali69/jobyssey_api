const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// Create OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL // Set your redirect URL
);

oAuth2Client.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.SENDER_MAIL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: oAuth2Client.getAccessToken(),
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