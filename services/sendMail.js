"use strict";
import nodemailer from "nodemailer";
import config from "../config/config.js";

const transporter = nodemailer.createTransport({
  host: config.MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: config.MAIL_USER,
    pass: config.MAIL_PASSWORD,
  },
});

export const sendMail = (mail, body, subject, filePath = "") => {
  return transporter.sendMail({
    from: config.MAIL_FROM,
    to: mail,
    cc: config.MAIL_CC,
    subject: subject,
    html: body,
    attachments: {
      path: filePath,
    },
  });
};
