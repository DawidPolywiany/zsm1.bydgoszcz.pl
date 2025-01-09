const express = require('express');
const _app = express();
const PORT = 3000;

//EJS в качестве шаблонизатора
_app.set('view engine', 'ejs');

// Указываем папку для статических файлов
_app.use(express.static('public'));

//Подключаем маршруты
const _index_route = require('./routes/index');

_app.use('/', _index_route); //Главная страница

//Запуск сервера
_app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
