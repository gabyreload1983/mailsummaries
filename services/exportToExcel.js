const xlsx = require("xlsx");
const path = require("path");

const exportExcel = (data, workSheetColumnsNames, workSheetName, filePath) => {
  const workBook = xlsx.utils.book_new();
  const workSheetData = [workSheetColumnsNames, ...data];

  const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
  xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
  xlsx.writeFile(workBook, path.resolve(filePath));
};

const exportToExcel = (
  vouchers,
  workSheetColumnsNames,
  workSheetName,
  filePath
) => {
  //filter duplicated
  const nrocompros = vouchers.map((voucher) => voucher.nrocompro);
  const filtered = vouchers.filter(
    ({ nrocompro }, index) => !nrocompros.includes(nrocompro, index + 1)
  );

  let saldo = 0;
  const data = filtered.map((voucher) => {
    if (voucher.contado === "S")
      return [
        voucher.fecha,
        voucher.nrocompro,
        parseFloat(voucher.importe).toFixed(2),
        parseFloat(voucher.importe).toFixed(2),
        `$${parseFloat(saldo).toFixed(2)}`,
      ];
    if (voucher.tipo === "FV" || voucher.tipo === "RP" || voucher.tipo === "ND")
      return [
        voucher.fecha,
        voucher.nrocompro,
        `$${parseFloat(voucher.importe).toFixed(2)}`,
        "-",
        `$${(saldo = (parseFloat(saldo) + parseFloat(voucher.importe)).toFixed(
          2
        ))}`,
      ];
    if (voucher.tipo === "RE" || voucher.tipo === "NC")
      return [
        voucher.fecha,
        voucher.nrocompro,
        "-",
        `$${parseFloat(voucher.importe).toFixed(2)}`,
        `$${(saldo = (parseFloat(saldo) - parseFloat(voucher.importe)).toFixed(
          2
        ))}`,
      ];
  });
  const partialData = data.slice(-20);

  exportExcel(partialData, workSheetColumnsNames, workSheetName, filePath);
};

module.exports = exportToExcel;
