const express = require('express')
const router = express.Router()
const offreController = require('../controllers/offre.controller')

// Create a new offre
router.post('/', offreController.create);

// Get all offres
router.get('/', offreController.findAll);

// Get a single offre by id
router.get('/:id', offreController.findById);

// Get a single offre by societe
router.get('/societe/:id', offreController.findBySociete);

// Get a single offre by categorie
router.get('/categorie/:id', offreController.findByCategorie);

// Update a offre with id
router.put('/:id', offreController.updateOffre);

// Delete a offre by id
router.delete('/:id', offreController.delete);

module.exports = router