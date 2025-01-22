const express = require('express');
const get_icon = require('get-icon');
const connectdb = require('./dbconfig/db.js');
const _app = express();
const PORT = 3000;

//EJS в качестве шаблонизатора
_app.set('view engine', 'ejs');

// Указываем папку для статических файлов
_app.use(express.static('public'));

//Подключаем маршруты
const _index_route = require('./routes/index');
const _info_route = require('./routes/info');

//Получаем все svg иконки
const _svg = {
    facebook: get_icon('facebook.svg'),
    menu: get_icon('menu.svg'),
    home: get_icon('home.svg'),
    plan: get_icon('plan.svg'),
    vulcan: get_icon('vulcan.svg'),
    wheelchair: get_icon('wheelchair.svg'),
    cookie: get_icon('cookie.svg'),
    exit: get_icon('exit.svg')
};

//Точка входа
(async () => {
    try {
        //Подключаем базу данных
        const _db = await connectdb();
        
        //Передаем db в маршруты
        _app.use((req, res, next) => {
            //Импортируем базу данных
            req.db =_db;
            
            //Импортируем все иконки
            req.svg = _svg
            
            next();
        });
        
        //Используем маршруты
        _app.use('/', _index_route);
        _app.use('/info', _info_route);
        
        //Запуск сервера
        _app.listen(PORT, () => {
            console.log(`Сервер запущен на http://localhost:${PORT}`);
        });
    } catch (_err) {
        console.log('Ошибка сервера:', _err);
    }
})();
