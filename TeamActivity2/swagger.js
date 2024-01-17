const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Temple API',
    description: 'Description'
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];
// removed the 2nd route below
// , './routes/temple.js'

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);