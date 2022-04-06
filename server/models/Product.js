const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  source: {
    type: String,
    trim: true

  },
  TDS: {
    type: Number,
    trim: true
  },
  origin: {
    type: String,
    trim: true
  },
  carbonation: {
    type: String
  },
  est: {
    type: Number,
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  company_website: {
    type: String,
    required: true
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;