const { sendMail } = require("../services/sendMail");
const { getBody } = require("./getBody");
exports.sendSummaries = async (debtors) => {
  try {
    let countMails = 0;
    for (const debtor of debtors) {
      const body = getBody(debtor);
      const subject = `✔ RESUMEN DE CUENTA - ${debtor.nombre}`;
      const date = new Date().toISOString().slice(0, 10);
      const filePath = `${process.env.FILE_PATH_PREFIX}${date}-${debtor.codigo}.xlsx`;
      process.env.TESTING
        ? await sendMail(process.env.MAIL_TESTING, body, subject, filePath)
        : await sendMail(debtor.mail, body, subject, filePath);
      countMails += 1;
    }
    const body = `<h5>Se enviaron ${countMails} mails con sus respectivos saldos.</h5>`;

    await sendMail(process.env.MAIL_INFO, body, "INFO SALDOS CC");
  } catch (error) {
    console.log("sendSummaries", error);
    await sendMail(process.env.MAIL_INFO, error.message, "ERROR!!!");
    process.exit(1);
  }
};
