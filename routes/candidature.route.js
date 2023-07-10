const express = require('express')
const router = express.Router()
const candidatureController = require('../controllers/candidature.controller')

// Create a new candidature
router.post('/', candidatureController.create);

// Get all candidatures
router.get('/', candidatureController.findAll);

// Get a single candidature by id
router.get('/:id', candidatureController.findById);

// Get a single candidature by offre id
router.get('/offre/:id', candidatureController.findByOffre);

//Get a single candidature by candidat id
router.get('/candidat/:id', candidatureController.findByCandidat);

// Update a candidature with id
router.put('/:id', candidatureController.updateCandidature);

// Delete a candidature by id
router.delete('/:id', candidatureController.delete);

module.exports = router