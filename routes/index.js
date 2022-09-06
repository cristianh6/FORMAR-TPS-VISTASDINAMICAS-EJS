let express = require('express');
let router = express.Router();

const { index } = require('../controllers/indexController')

/* / */
router.get('/', index);

module.exports = router;