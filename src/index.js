const CustomerServiceFactory = require('./db/factory');
const CustomerController = require('./controllers/customer');

// Create the appropriate service based on configuration
const serviceType = process.env.DB_TYPE || 'postgres'; // 'postgres', 'mongo', or 'fake'
const connectionString = process.env.DATABASE_URL;

//const customerService = CustomerServiceFactory.create(serviceType, connectionString);
//const customerController = new CustomerController(customerService); 