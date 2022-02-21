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
        let fileUrlsArrays=[]
        for(let i=0;i<req.files.length;i++) {
            fileUrlsArrays=[...fileUrlsArrays,req.files[i].path]
        }
        
        product.fileUrls=fileUrlsArrays
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
