const { ObjectId } = require('mongodb');
const _err_route = require('../routes/err');

module.exports = {
    index: async (req, res, next) => {
        //Получаем колекции
        const _info = req.db.collection('info');
        
        let _articles_list = [];
        for(const i of req.articles.articles) {
            try {
                _articles_list.push(await _info.findOne({_id: new ObjectId(i)}));
            } catch (_err) {
                console.log('Ошибка при поиске mongodb:', _err);
                return _err_route(req, res);
            }
        }
        
        res.render('index', Object.assign({},
            {meta: {
                description: 'описание',
                keywords: 'ключивые, слова',
                title: 'название'
            }},
            {svg: req.svg},
            req.nav,
            req.links,
            {articles: _articles_list}
        ));
    }
}
