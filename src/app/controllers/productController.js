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

    // [GET] /create
    create(req, res, next) {
        const product = new Product(req.body)
        product.fileUrl=req.file.path
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
