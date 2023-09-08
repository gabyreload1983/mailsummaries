import dotenv from "dotenv";

dotenv.config();

export default {
  URBANO_HOST: process.env.URBANO_HOST,
  URBANO_DB: process.env.URBANO_DB,
  URBANO_PASS: process.env.URBANO_PASS,
  URBANO_USER: process.env.URBANO_USER,
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  MAIL_FROM: process.env.MAIL_FROM,
  MAIL_INFO: process.env.MAIL_INFO,
  MAIL_CC: process.env.MAIL_CC,
  MAIL_TESTING: process.env.MAIL_TESTING,
  MAIL_LIMIT: process.env.MAIL_LIMIT,
  FILE_PATH_PREFIX: process.env.FILE_PATH_PREFIX,
  INDEX_DEBTOR: process.env.INDEX_DEBTOR,
  TESTING: process.env.TESTING,
};
