const express = require('express')
const router = express.Router()
const secteurController = require('../controllers/secteur.controller')

// Create a new secteur
router.post('/', secteurController.create);

// Get all secteurs
router.get('/', secteurController.findAll);

// Get a single secteur by id
router.get('/:id', secteurController.findById);

// Update a secteur with id
router.put('/:id', secteurController.updateSecteur);

// Delete a secteur by id
router.delete('/:id', secteurController.delete);

module.exports = router