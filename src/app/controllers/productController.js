const ProductList=require('../models/ProductList')
// const {mongooseToObject} = require('../../util/mongoose')

class ProductController {
    
     // [GET] /store
     store(req, res, next) {
        ProductList.find({subject:"ListTypeProduct"})
            .then(productitem => {
                res.json({productitem})
                }
            )
            .catch(next)
    }

}

module.exports = new ProductController();
