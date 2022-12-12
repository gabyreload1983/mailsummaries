require("dotenv").config();
const { sendMail } = require("../services/sendMail");

exports.sendSummaries = async (debtors) => {
  try {
    let countMails = 0;
    for (const debtor of debtors) {
      const body = `
                <h3>ESTE ES UN MAIL AUTOMATICO.</h3>
                <p>Nos comunicamos desde Sinapsis Srl</p>
                <h4>Cliente: ${debtor.nombre}</h4>
                <p>El <b>saldo</b> de la cuenta es de: <strong>$${debtor.saldo}</strong></p>
                <p>Se <b>adjunta</b> resumen de cuenta.</p>
                <p>Saludos coordiales</p>`;
      const subject = `✔ RESUMEN DE CUENTA - ${debtor.nombre}`;
      const date = new Date().toISOString().slice(0, 10);
      const filePath = `${process.env.FILE_PATH_PREFIX}${date}-${debtor.codigo}.xlsx`;
      await sendMail(customer.mail, body, subject, filePath);
      countMails += 1;
    }

    const body = `<h5>Se enviaron ${countMails} mails con sus respectivos saldos.</h5>`;
    sendMail(process.env.MAIL_INFO, body, "INFO SALDOS CC");
  } catch (error) {
    console.log("sendSummaries", error);
    sendMail(process.env.MAIL_INFO, error.message, "ERROR!!!");
  }
};
