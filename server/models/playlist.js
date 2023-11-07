const mongoose = require('mongoose');

// Define the playlist schema
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tracks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Music', // Reference to the Music model
    },
  ],
  // Add more fields as needed (e.g., description, owner)
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
