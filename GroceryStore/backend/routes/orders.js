const express = require('express')
const {
  createOrder
} = require('../controllers/orderController')

const router = express.Router()

// GET all workouts
//router.get('/', getProducts)

// GET a single workout
// router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createOrder)

// DELETE a workout
//router.delete('/:id', deleteWorkout)

// UPDATE a workout
//router.patch('/:id', updateWorkout) 

module.exports = router