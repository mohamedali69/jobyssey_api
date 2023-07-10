const express = require('express')
const router = express.Router()
const categorieController = require('../controllers/categorie.controller')

// Create a new categorie
router.post('/', categorieController.create);

// Get all categories
router.get('/', categorieController.findAll);

// Get a single categorie by id
router.get('/:id', categorieController.findById);

// Update a categorie with id
router.put('/:id', categorieController.updateCategorie);

// Delete a categorie by id
router.delete('/:id', categorieController.delete);

module.exports = router