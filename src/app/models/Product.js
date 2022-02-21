const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete')

const Product = new Schema({
  nameProduct: { type: String, required: true },
  branch: { type: String, required: true },
  typeProduct: { type: String, required: true },
  typeDetailProduct: { type: String, required: true },
  price: { type: String, required: true },
  fileUrls:[String],
  description: { type: String, required: true },
  slug: { type: String, slug: 'nameProduct', unique: true }
}, {
  timestamps: true
});

// Add plugin
mongoose.plugin(slug)
// Product.plugin(mongooseDelete, { 
//   overrideMethods: true ,
//   deletedAt : true,
// })

module.exports = mongoose.model('Product', Product)
