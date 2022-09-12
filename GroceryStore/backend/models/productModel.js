const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
  Title: {
    type: String,
    required: true
  },
  ImgSrc: {
    type: String,
    required: true,
    unique: true
  },
  Descr: {
    type: String,
    required: true
  },
  Quantity: {
    type: Number,
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  TotalPrice: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)