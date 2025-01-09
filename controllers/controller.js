const fs = require('fs');
const path = require('path');

//Получаем все svg иконки
function get_icon(name) {
    const _icon_path = path.join(__dirname, `../public/images/${name}`);
    return fs.readFileSync(_icon_path, 'utf-8');
}
const _svg = {
    facebook: get_icon('facebook.svg'),
    menu: get_icon('menu.svg'),
    home: get_icon('home.svg'),
    plan: get_icon('plan.svg'),
    vulcan: get_icon('vulcan.svg'),
    wheelchair: get_icon('wheelchair.svg'),
    cookie: get_icon('cookie.svg')
}

exports.index = (req, res) => {
    res.render('index', {
        svg: _svg
    });
};
