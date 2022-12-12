const connection = require("../services/connection");

exports.getData = (query) => {
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
