const Order = require('../models/orderModel')
const mongoose = require('mongoose')




// create a new order
const createOrder = async (req, res) => {
    const { Name , PhoneNumber , Address , Email , TotalPrice , CartsRecent } = req.body
  
    // add to the database
    try {
      const order = await Order.create({  Name , PhoneNumber , Address , Email , TotalPrice , CartsRecent })
      res.status(200).json(order)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

module.exports = {
    createOrder
}