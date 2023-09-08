import mysql from "mysql";
import config from "../config/config.js";

export const connection = mysql.createConnection({
  host: config.URBANO_HOST,
  database: config.URBANO_DB,
  password: config.URBANO_PASS,
  user: config.URBANO_USER,
});
