const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    // do not fail on invalid certs (common when using IP address for SMTP host)
    rejectUnauthorized: false
  }
});

const sendVerificationEmail = async (email, token) => {
  const url = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;
  await transporter.sendMail({
    from: '"Aptixity Admin" <' + process.env.SMTP_USER + '>',
    to: email,
    subject: "Verify your email - Aptixity",
    html: `
      <div style="background: #0a0a0f; color: #fff; padding: 20px; font-family: sans-serif;">
        <h1 style="color: #b5d636;">Welcome to Aptixity</h1>
        <p>Please click the button below to verify your email address.</p>
        <a href="${url}" style="background: #d4a234; color: #000; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Verify Email</a>
        <p style="margin-top: 20px; color: #a0a0b0;">If the button doesn't work, copy and paste this link: ${url}</p>
      </div>
    `
  });
};

const sendResetEmail = async (email, token) => {
  const url = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
  await transporter.sendMail({
    from: '"Aptixity Admin" <' + process.env.SMTP_USER + '>',
    to: email,
    subject: "Reset your password - Aptixity",
    html: `
      <div style="background: #0a0a0f; color: #fff; padding: 20px; font-family: sans-serif;">
        <h1 style="color: #b5d636;">Password Reset</h1>
        <p>You requested a password reset. Click the button below to continue.</p>
        <a href="${url}" style="background: #d4a234; color: #000; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
      </div>
    `
  });
};

module.exports = { sendVerificationEmail, sendResetEmail };
