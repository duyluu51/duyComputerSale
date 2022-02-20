const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/productController');
const fileUploader = require('../config/cloudinary')
// // const multer = require('multer')

// // // xử lý lưu trữ ảnh
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, './client/public/imgProduct')
// //   },
// //   filename: function (req, file, cb) {
// //     console.log(file)
// //     cb(null, file.originalname);
// //   },
// // })
// const upload = multer({ storage: storage }).single('imgs')

router.get('/store', productController.store)
router.post('/create', fileUploader.single('imgs'), productController.create)

module.exports = router;
