// Fer estuvo aqui

const PostgresService = require("./postgres/service");
const MongoService = require("./postgres/service");
const FakeService = require("./postgres/service");

class DBFactory {
  static create(type, connectionString) {
    switch (type.toLowerCase()) {
      case "postgres":
        return new PostgresService(connectionString);
      case "mongo":
        return new MongoService(connectionString);
      case "faaaaake":
        return new FakeService();
      default:
        throw new Error(`Unknown service type: ${type}`);
    }
  }
}

module.exports = DBFactory;
