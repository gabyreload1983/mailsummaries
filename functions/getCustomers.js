import config from "../config/config.js";
import { getData } from "./getData.js";
const EXCLUDE_CUSTOMERS = [];

export const getCustomers = async () => {
  try {
    let query = `SELECT * FROM clientes`;
    if (config.TESTING) {
      query = `SELECT * FROM clientes LIMIT ${config.MAIL_LIMIT}`;
    }
    const customers = await getData(query);
    return customers.filter(
      (customer) => !EXCLUDE_CUSTOMERS.includes(customer.codigo)
    );
  } catch (error) {
    console.log("getCustomers", error);
  }
};
