require("dotenv").config();
const exportToExcel = require("../services/exportToExcel");
const { getData } = require("../functions/getData");

exports.exportSummaries = async (debtors) => {
  try {
    for (const customer of debtors) {
      const query = `SELECT nrocompro, tipo, fecha, importe, contado  FROM ctacli WHERE codigo = '${customer.codigo}'`;
      const data = await getData(query);
      const workSheetColumnsNames = [
        "Fecha",
        "Comprobante",
        "Debe",
        "Haber",
        "Saldo",
      ];
      const date = new Date().toISOString().slice(0, 10);
      const workSheetName = `${customer.codigo}`;
      const filePath = `${process.env.FILE_PATH_PREFIX}${date}-${customer.codigo}.xlsx`;

      exportToExcel(data, workSheetColumnsNames, workSheetName, filePath);
    }
  } catch (error) {
    console.log("exportSummaries", error);
  }
};
