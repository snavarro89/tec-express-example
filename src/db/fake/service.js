const DBService = require('../dbService');

class FakeService extends DBService {
  constructor() {
    super();
    this.customers = new Map();
  }

  async getAllCustomers() {
    return Array.from(this.customers.values());
  }

  async getCustomerById(id) {
    return this.customers.get(id);
  }

  async createCustomer(name, email) {
    const id = Date.now().toString();
    const customer = { id, name, email };
    this.customers.set(id, customer);
    return customer;
  }

  async updateCustomer(id, name, email) {
    const customer = { id, name, email };
    this.customers.set(id, customer);
    return customer;
  }

  async deleteCustomer(id) {
    this.customers.delete(id);
  }
}

module.exports = FakeService;
