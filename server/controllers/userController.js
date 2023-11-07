// Import any necessary models or modules you need
const User = require('../models/user'); // Replace with the actual user model
const passport = require('passport');

// Function to register a new user
const registerUser = (req, res) => {
  const { username, password } = req.body;
  // Create a new User document and save it to the database
  User.register(new User({ username }), password, (err, user) => {
    if (err) {
      // Handle registration error (e.g., username already exists)
      return res.status(400).json({ error: err.message });
    }
    // Log the user in after successful registration
    passport.authenticate('local')(req, res, () => {
      return res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

// Function to log in a user
const loginUser = (req, res) => {
  passport.authenticate('local')(req, res, () => {
    if (req.user) {
      return res.status(200).json({ message: 'User logged in successfully' });
    } else {
      return res.status(401).json({ error: 'Authentication failed' });
    }
  });
};

// Function to log out a user
const logoutUser = (req, res) => {
  req.logout();
  return res.status(200).json({ message: 'User logged out successfully' });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
