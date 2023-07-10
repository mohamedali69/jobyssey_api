const express = require('express')
const router = express.Router()
const candidatController = require('../controllers/candidat.controller')
const authenticateAndAuthorize = require('../middleware/authenticateAndAuthorize')

// Create a new candidat
router.post('/', candidatController.create);

// Get all candidats
router.get('/', candidatController.findAll);

// Get a single candidat by id
router.get('/:id', candidatController.findById);

// Update a candidat with id
router.put('/:id', candidatController.updateCandidat);

// Delete a candidat by id
router.delete('/:id', candidatController.delete);

module.exports = router