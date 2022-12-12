"use strict";
const { getCustomers } = require("./getCustomers");
const { getData } = require("./getData");

const INDEX_DEBTOR = 500;

exports.getDebtors = async () => {
  try {
    const customers = await getCustomers();

    for (const customer of customers) {
      const queryDebe = `SELECT SUM(importe) AS balance from ctacli WHERE codigo = '${customer.codigo}' AND contado != "S" AND (tipo = "FV" OR tipo = "FA" OR tipo = "FB" OR tipo = "RP" OR tipo = "ND");`;
      const queryHaber = `SELECT SUM(importe) AS balance FROM ctacli WHERE codigo = '${customer.codigo}' AND (tipo = "RE" OR tipo = "NC");`;
      const debe = await getData(queryDebe);
      const haber = await getData(queryHaber);

      if (debe[0].balance - haber[0].balance > INDEX_DEBTOR) {
        customer.saldo = (debe[0].balance - haber[0].balance).toFixed(0);
      } else {
        customer.saldo = 0;
      }
    }
    return customers.filter(
      (customer) => customer.saldo !== 0 && customer.mail
    );
  } catch (error) {
    console.log("getDebtors", error);
  }
};
