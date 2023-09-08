import { getDebtors } from "./functions/getDebtors.js";
import { exportSummaries } from "./functions/exportSummaries.js";
import { sendSummaries } from "./functions/sendSummaries.js";
import config from "./config/config.js";

async function app() {
  try {
    console.log(`${new Date().toLocaleString()} - START`);
    config.TESTING && console.log(`${new Date().toLocaleString()} - TESTING`);

    const debtors = await getDebtors();
    console.log(`${new Date().toLocaleString()} - ${debtors.length} DEBTORS`);

    await exportSummaries(debtors);
    console.log(
      `${new Date().toLocaleString()} - EXPORT EXCEL FILES COMPLETED`
    );

    console.log(`${new Date().toLocaleString()} - SENDING MAILS...`);
    await sendSummaries(debtors);
    console.log(`${new Date().toLocaleString()} - SENDING SUMMARIES COMPLETED`);
    process.exit(0);
  } catch (error) {
    console.log(error);
    await sendMail(config.MAIL_INFO, error.message, "ERROR!!!");
    process.exit(1);
  }
}

app();
