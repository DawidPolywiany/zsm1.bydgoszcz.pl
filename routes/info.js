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
    let _data;
    try {
        _data = await _info.findOne({_id: new ObjectId(_id)});
    } catch {
        res.render('not-found', Object.assign({},
            {meta: {
                description: "",
                keywords: "",
                title: "This page doesn't seem to exist."
            }},
            {svg: req.svg},
            _nav
        ));
        return;
    }
    
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

