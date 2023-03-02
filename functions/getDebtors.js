"use strict";
const { sendMail } = require("../services/sendMail");
const { getCustomers } = require("./getCustomers");
const { getData } = require("./getData");

exports.getDebtors = async () => {
  try {
    const customers = await getCustomers();

    for (const customer of customers) {
      const queryDebe = `SELECT SUM(importe) AS balance from ctacli WHERE codigo = '${customer.codigo}' AND contado != "S" AND (tipo = "FV" OR tipo = "FA" OR tipo = "FB" OR tipo = "RP" OR tipo = "ND");`;
      const queryHaber = `SELECT SUM(importe) AS balance FROM ctacli WHERE codigo = '${customer.codigo}' AND (tipo = "RE" OR tipo = "NC");`;
      const debe = await getData(queryDebe);
      const haber = await getData(queryHaber);

      if (debe[0].balance - haber[0].balance > process.env.INDEX_DEBTOR) {
        customer.saldo = (debe[0].balance - haber[0].balance).toFixed(0);
      } else {
        customer.saldo = 0;
      }
    }

    const withoutMail = customers.filter(
      (customer) => customer.saldo !== 0 && customer.mail === ""
    );
    let body = "";
    withoutMail.forEach((customer) => {
      body += `
      ${customer.codigo} - ${customer.nombre} - 
      <a target="_blank" href="whatsapp://send/?phone=${customer.telefono}&text=Hola, nos comunicamos de Sinapsis SRL. El saldo de tu cuenta es de $${customer.saldo}">
        ${customer.telefono}
      </a>
      - Saldo: $${customer.saldo}
      <br/>`;
    });
    await sendMail(process.env.MAIL_INFO, body, "DEUDORES SIN MAIL");
    console.log(
      `${new Date().toLocaleString()} - SENDING DETAILS OF ${
        withoutMail?.length
      } DEBTORS WITHOUTMAIL`
    );

    return customers.filter(
      (customer) => customer.saldo !== 0 && customer.mail
    );
  } catch (error) {
    console.log("getDebtors", error);
  }
};
