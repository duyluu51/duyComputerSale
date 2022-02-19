const mongoose = require('mongoose')
// const slug = require('mongoose-slug-generator')

const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete')

const Product = new Schema({
  nameProduct: { type:String, required: true},
  branch: { type:String, required: true},
  typeProduct: { type:String, required: true},
  typeDetailProduct: { type:String, required: true},
  price: { type:Number, required: true},
  imgs:[String],
  description:{type:String},
  list:{ type:Array, required: true}
  // slug: { type: String, slug:'name', unique:true }
},{
  timestamps:true
});

// // Add plugin
// mongoose.plugin(slug)
// Product.plugin(mongooseDelete, { 
//   overrideMethods: true ,
//   deletedAt : true,
// })

module.exports=mongoose.model('Product', Product)
