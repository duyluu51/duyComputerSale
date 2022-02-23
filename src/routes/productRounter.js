const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/productController');
const fileUploader = require('../config/cloudinary')

router.get('/store', productController.store)
router.get('/banner', productController.banner)
router.get('/bannerhome', productController.bannerHome)
router.get('/collection/:typeproduct', productController.collection)
router.post('/create', fileUploader.array('imgs', 5), productController.create)


module.exports = router;
