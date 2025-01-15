const express = require('express');
const route = express.Router();

route.get('/', async (req, res) => {
    _home = req.db.collection('home');
    _data = await _home.findOne({_name: "header"});
    
    res.render('index', {
        svg: req.svg,
        data: _data
    });
});

module.exports = route;
