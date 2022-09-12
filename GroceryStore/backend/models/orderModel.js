const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: String,
    required: true
  },
  TotalPrice: {
    type: Number,
    required: true
  },
  CartsRecent:{
    type: Array,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)