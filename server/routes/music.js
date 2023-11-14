// routers/music.js
const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

router.post('/play', musicController.playTrack);
router.post('/addToQueue', musicController.addToQueue);
// Add more music-related routes as needed

module.exports = router;
