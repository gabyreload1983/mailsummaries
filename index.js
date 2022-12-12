require("dotenv").config();
const { getDebtors } = require("./functions/getDebtors");
const { exportSummaries } = require("./functions/exportSummaries");
const { sendSummaries } = require("./functions/sendSummaries");

async function app() {
  console.log(`${new Date().toLocaleString()} - START`);

  const debtors = await getDebtors();
  console.log(`${new Date().toLocaleString()} - ${debtors.length} DEBTORS`);

  await exportSummaries(debtors);
  console.log(`${new Date().toLocaleString()} - EXPORT EXCEL FILES COMPLETED`);

  await sendSummaries(debtors);
  console.log(`${new Date().toLocaleString()} - SENDING SUMMARIES COMPLETED`);
}

app();
