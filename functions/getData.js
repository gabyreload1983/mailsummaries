import { connection } from "../services/connection.js";

export const getData = (query) => {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, result) => {
      if (error) {
        reject(new Error(error));
      } else {
        resolve(result);
      }
    });
  });
};
