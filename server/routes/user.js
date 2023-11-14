// routers/user.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/addToQueue', userController.addToQueue);
router.post('/removeFromQueue', userController.removeFromQueue);
router.get('/getQueue', userController.getQueue);
// Add more user-related routes as needed

module.exports = router;
