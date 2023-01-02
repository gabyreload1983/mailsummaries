"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

exports.sendMail = (mail, body, subject, filePath = "") => {
  return transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: mail,
    cc: process.env.MAIL_CC,
    subject: subject,
    html: body,
    attachments: {
      path: filePath,
    },
  });
};
