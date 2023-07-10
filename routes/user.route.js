const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

// Create a new user
router.post('/', userController.create);

// Get all users
router.get('/', userController.findAll);

// Get a single user by id
router.get('/:id', userController.findById);

// Get a single user by email
router.get('/email/:email', userController.fetchUserByEmail);

// Update a user with id
router.put('/:id', userController.updateUser);

// Delete a user by id
router.delete('/:id', userController.delete);

module.exports = router