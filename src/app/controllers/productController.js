const ProductList = require('../models/ProductList')
const Product = require('../models/Product')

// const {mongooseToObject} = require('../../util/mongoose')

class ProductController {

    // [GET] /store
    store(req, res, next) {
        ProductList.find({ subject: "ListTypeProduct" })
            .then(productitem => {
                res.json({ productitem })
            })
            .catch(next)
    }

    // [GET] /banner
    banner(req, res, next) {
        ProductList.find({ subject: "Banner" })
            .then(banners => {
                res.json({ banners })
            })
            .catch(next)
    }

    // [GET] /bannerHome
    bannerHome(req, res, next) {
        ProductList.find({ subject: "BannerHome" })
            .then(bannerItems => {
                res.json({ bannerItems })
            })
            .catch(next)
    }

    // [GET] /collection/:typeproduct
    collection(req, res, next) {
        Product.find({ typeProduct: req.params.typeproduct })
            .then(productCollection => {
                res.json({ productCollection })
            })
            .catch(next)
    }

    // [GET] /create
    create(req, res, next) {
        const product = new Product(req.body)
        let fileUrlsArrays = []
        for (let i = 0; i < req.files.length; i++) {
            fileUrlsArrays = [...fileUrlsArrays, req.files[i].path]
        }

        product.fileUrls = fileUrlsArrays
        product.save()
            .then(() => {
                console.log("Save data sucess")
            })
            .then(() => {
                res.json("OK")
            })
    }

}

module.exports = new ProductController();
