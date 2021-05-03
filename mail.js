//all that we need inorder to send our email

const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const API_Key = process.env.Api_key;
const Domain = process.env.Domain;

const auth = {
  auth: {
    api_key: API_Key, // TODO: Replace with your mailgun API KEY process.env.API_KEY ||
    domain: Domain, // TODO: Replace with your mailgun DOMAIN process.env.DOMAIN ||
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));
const sendMail = (email, subject, emailBody, cb) => {
  const mailOptions = {
    from: email, // Twhere the email is coming from
    to: "takutapfu@gmail.com", // TODO: the receiver email has to be authorized for the free tier
    //to: 'starhomecleaners01@gmail.com', // TODO: the receiver email has to be authorized for the free tier
    subject,
    html: emailBody,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      return cb(err, null);
    }
    return cb(null, data);
  });
};

module.exports = sendMail;
