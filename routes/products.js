const express = require('express');
const router = express.Router();


const { detail } = require('../controllers/productController')



router.get('/detalle/:id',detail);


module.exports = router;