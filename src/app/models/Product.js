const mongoose = require('mongoose')
// const slug = require('mongoose-slug-generator')

const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete')

const Product = new Schema({
  type: { type:String, required: true},
  name: { type:String, required: true},
  list:{ type:Array, required: true},
  subject: {type:String, required: true}
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
