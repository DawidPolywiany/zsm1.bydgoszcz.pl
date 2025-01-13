const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.render('index', {
        svg: req.svg
    });
});

module.exports = route;
