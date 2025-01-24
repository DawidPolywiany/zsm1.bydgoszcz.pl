const { ObjectId } = require('mongodb');
const _err_route = require('../routes/err');

module.exports = {
    info: async (req, res, next) => {
        const _id = req.query.id;
        const _info = req.db.collection('info');
        
        //Получаем дату
        let _data;
        try {
            _data = await _info.findOne({_id: new ObjectId(_id)});
        } catch (_err) {
            console.log('Ошибка при поиске mongodb:', _err);
            return _err_route(req, res);
        }
        
        res.render('info', Object.assign({},
            {meta: {
                description: _data.content[0],
                keywords: _data.tags,
                title: _data.name
            }},
            {svg: req.svg},
            req.nav,
            _data
        ));
    }
}
