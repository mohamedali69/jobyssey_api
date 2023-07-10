const express = require('express')
const router = express.Router()
const interetController = require('../controllers/interet.controller')

// Create a new interet
router.post('/', interetController.create);

// Get all interets
router.get('/', interetController.findAll);

// Get a single interet by id
router.get('/:id', interetController.findById);

// Update a interet with id
router.put('/:id', interetController.updateInteret);

// Delete a interet by id
router.delete('/:id', interetController.delete);

module.exports = router