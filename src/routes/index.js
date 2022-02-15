const productRounter = require('./productRounter');

function route(app) {
    app.use('/product', productRounter);
}

module.exports = route;
