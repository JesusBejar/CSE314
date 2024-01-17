const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger-output.json');
router.use('api/docs', swaggerUi.serve);
router.use('api/docs', swaggerUi.setup(swaggerDoc));

module.exports = router;