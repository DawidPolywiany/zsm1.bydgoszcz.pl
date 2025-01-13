const { MongoClient } = require('mongodb');
const _url = 'mongodb://localhost:27017';
const _db_name = 'zsm1-bydgoszcz-pl';

//База данных
let db;

//Точка входа
async function connect_to_db() {
    const _client = new MongoClient(_url);

    //Пробуем подключиться к mongodb
    if (!db) {
        try {
            await _client.connect();
            db = _client.db(_db_name);
            console.log('Успешно подключено к MongoDB');
        } catch (_err) {
            console.error('Ошибка подключения к MongoDB:', _err);
        }
    }
    
    return db;
}

module.exports = connect_to_db;
