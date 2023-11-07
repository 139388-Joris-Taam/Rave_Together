const mongoose = require('mongoose');

// Define the music schema
const musicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  soundcloudUrl: {
    type: String,
    required: true,
  },
  // Add more fields as needed (e.g., genre, release date)
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;
