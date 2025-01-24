const express = require('express');
const route = express.Router();
const connectdb = require('../dbconfig/db.js');
const get_icon = require('get-icon');

let _db, _nav, _links, _articles, _svg;

(async () => {
    try {
        //Подключаем базу данных
        _db = await connectdb();
        const _home = _db.collection('home');
        const _info = _db.collection('info');
        
        //Получаем дату
        _nav = await _home.findOne({_name: "header"});
        _links = await _home.findOne({_name: "links"});
        _articles = await _home.findOne({_name: "articles"});
        
        console.log('Mongodb данные получены');
    } catch (_err) {
        console.log('Ошибка подключения к базе данных:', _err);
    }
})();

//Svg icons
try {
    //Получаем все svg иконки
    _svg = {
        facebook: get_icon('facebook.svg'),
        menu: get_icon('menu.svg'),
        home: get_icon('home.svg'),
        plan: get_icon('plan.svg'),
        vulcan: get_icon('vulcan.svg'),
        wheelchair: get_icon('wheelchair.svg'),
        cookie: get_icon('cookie.svg'),
        exit: get_icon('exit.svg')
    };
} catch (_err) {
    console.log('Ошибка при получении svg:', _err);
}

module.exports = (req, res, next) => {
    //Импортируем базу данных
    req.db =_db;
    req.nav = _nav;
    req.links = _links;
    req.articles = _articles;

    //Импортируем все иконки
    req.svg = _svg

    next();
}
