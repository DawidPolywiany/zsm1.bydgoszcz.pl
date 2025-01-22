const express = require('express');
const { ObjectId } = require('mongodb')
const route = express.Router();

route.get('/', async (req, res) => {
    const _id = req.query.id;
    
    //Получаем колекции
    const _home = req.db.collection('home');
    const _info = req.db.collection('info');
    
    //Получаем дату
    const _nav = await _home.findOne({_name: "header"});
    const _data = await _info.findOne({_id: new ObjectId(_id)});
    
    res.render('info', Object.assign({},
        {meta: {
            description: _data.content[0],
            keywords: _data.tags,
            title: _data.name
        }},
        {svg: req.svg},
        _nav,
        _data
    ));
});

module.exports = route;

