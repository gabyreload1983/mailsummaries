const { getData } = require("./getData");
const excludedCustomers = process.env.EXCLUDE_CUSTOMERS;

exports.getCustomers = async () => {
  try {
    const query = `SELECT * FROM clientes`;
    const customers = await getData(query);
    return customers.filter(
      (customer) => !excludedCustomers.includes(customer.codigo)
    );
  } catch (error) {
    console.log("getCustomers", error);
  }
};
