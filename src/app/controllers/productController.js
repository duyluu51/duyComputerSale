const Products=require('../models/Product')
// const {mongooseToObject} = require('../../util/mongoose')

class ProductController {
    
     // [GET] /store
     store(req, res, next) {
        Products.find({subject:"ListTypeProduct"})
            .then(product => {
                res.json({product})
                }
            )
            .catch(next)
    }

}

module.exports = new ProductController();
