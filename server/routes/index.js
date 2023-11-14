// routers/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the music app!');
});

module.exports = router;
