const express = require('express')
const router = express.Router()
const notificationController = require('../controllers/notification.controller')

// Create a new notification
router.post('/', notificationController.createNotification);

// Get all notifications
router.get('/', notificationController.findAll);

// Get a single notification by id
router.get('/:id', notificationController.findById);

// Get all notifications by societeId
router.get('/user/:id', notificationController.findByUserId);

// Update a notification with id
router.put('/:id', notificationController.updateNotification);

// Delete a notification by id
router.delete('/:id', notificationController.deleteNotification);

module.exports = router