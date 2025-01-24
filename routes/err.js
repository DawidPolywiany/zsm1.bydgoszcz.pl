const { not_found } = require('../controllers/err-controller');

module.exports = (req, res) => {
    not_found(req, res);
}
