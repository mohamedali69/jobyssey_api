const express = require('express')
const router = express.Router()
const societeController = require('../controllers/societe.controller')

// Create a new societe
router.post('/', societeController.create);

// Get all societes
router.get('/', societeController.findAll);

// Get a single societe by id
router.get('/:id', societeController.findById);

// Get a single societe by user id
router.get('/user/:id', societeController.findByUserId);

// Update a societe with id
router.put('/:id', societeController.updateSociete);

// Delete a societe by id
router.delete('/:id', societeController.delete);

module.exports = router