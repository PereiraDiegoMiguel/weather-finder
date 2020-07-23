const express = require('express');
const router = express.Router();
const controller = require('./contollers/controller');

router.get('/', controller.rederHomePage);
router.post('/', controller.getWeather);
router.get('/about', controller.renderAboutPage);

module.exports = router; 