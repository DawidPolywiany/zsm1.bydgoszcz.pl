const express = require('express');
const route = express.Router();
const { info } = require('../controllers/info-controller');

route.get('/', info);

module.exports = route;

