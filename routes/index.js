const express = require('express');
const route = express.Router();
const _controller = require('../controllers/controller')

route.get('/', _controller.index);

module.exports = route;
