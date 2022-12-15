const { getData } = require("./getData");
const EXCLUDE_CUSTOMERS = [];

exports.getCustomers = async () => {
  try {
    const query = `SELECT * FROM clientes`;
    const customers = await getData(query);
    return customers.filter(
      (customer) => !EXCLUDE_CUSTOMERS.includes(customer.codigo)
    );
  } catch (error) {
    console.log("getCustomers", error);
  }
};
