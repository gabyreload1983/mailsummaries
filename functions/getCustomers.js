const { getData } = require("./getData");
const EXCLUDE_CUSTOMERS = [];

exports.getCustomers = async () => {
  try {
    let query = `SELECT * FROM clientes WHERE mail != ''`;
    if (process.env.TESTING) {
      query = `SELECT * FROM clientes WHERE mail != '' LIMIT ${process.env.MAIL_LIMIT}`;
    }
    const customers = await getData(query);
    return customers.filter(
      (customer) => !EXCLUDE_CUSTOMERS.includes(customer.codigo)
    );
  } catch (error) {
    console.log("getCustomers", error);
  }
};
