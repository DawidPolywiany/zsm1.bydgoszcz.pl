const express = require('express');
const { ObjectId } = require('mongodb');
const route = express.Router();

route.get('/', async (req, res) => {
    //Получаем колекции
    const _home = req.db.collection('home');
    const _info = req.db.collection('info');
    
    //Получаем дату
    const _nav = await _home.findOne({_name: "header"});
    const _links = await _home.findOne({_name: "links"});
    const _articles = await _home.findOne({_name: "articles"});
    let _articles_list = [];
    for(const i of _articles.articles) {
        _articles_list.push(await _info.findOne({_id: new ObjectId(i)}));
    }
    
    res.render('index', Object.assign({},
        {meta: {
            description: 'описание',
            keywords: 'ключивые, слова',
            title: 'название'
        }},
        {svg: req.svg},
        _nav,
        _links,
        {articles: _articles_list}
    ));
});

module.exports = route;
