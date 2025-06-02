import config from "../config/config.js";
import { sendMail } from "../services/sendMail.js";
import { getBody } from "./getBody.js";

export const sendSummaries = async (debtors) => {
  try {
    let countMails = 0;
    for (const debtor of debtors) {
      const body = getBody(debtor);
      const subject = `✔ RESUMEN DE CUENTA - ${debtor.nombre}`;
      const date = new Date().toISOString().slice(0, 10);
      const filePath = `${config.FILE_PATH_PREFIX}${date}-${debtor.codigo}.xlsx`;
      config.TESTING
        ? await sendMail(config.MAIL_TESTING, null, body, subject, filePath)
        : await sendMail(debtor.mail, null, body, subject, filePath);
      countMails += 1;
    }
    const body = `<h5>Se enviaron ${countMails} mails con sus respectivos saldos.</h5>`;

    await sendMail(config.MAIL_INFO, null, body, "INFO SALDOS CC");
  } catch (error) {
    console.log("sendSummaries", error);
    await sendMail(
      config.MAIL_INFO,
      null,
      error.message,
      "ERROR - sendSummaries"
    );
    process.exit(1);
  }
};
