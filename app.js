const express = require('express');
const _app = express();
const PORT = 3000;

//EJS в качестве шаблонизатора
_app.set('view engine', 'ejs');

// Указываем папку для статических файлов
_app.use(express.static('public'));

//Подключаем маршруты
const _main_route = require('./routes/main');
const _index_route = require('./routes/index');
const _info_route = require('./routes/info');
const _err_route = require('./routes/err');

//Точка входа
(async () => {
    try {
        //Используем маршруты
        _app.use(_main_route);
        _app.use('/', _index_route);
        _app.use('/info', _info_route);
        _app.use(_err_route);
        
        //Запуск сервера
        _app.listen(PORT, () => {
            console.log(`Сервер запущен на http://localhost:${PORT}`);
        });
    } catch (_err) {
        console.log('Ошибка запуска сервера:', _err);
    }
})();
