const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import the Mongoose User model
const bcrypt = require('bcrypt'); // For password hashing

// User registration route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the email or username is already in use (handle this validation according to your needs)
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    return res.status(400).json({ message: 'Username or email is already in use' });
  }

  // Hash the password before saving it to the database
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  // Create a new user
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error registering the user' });
  }
});

// User login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user by username (you can also use email for login)
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Check if the provided password matches the stored hashed password
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid password' });
  }

  // User authentication is successful; you can create a session, JWT token, or use a middleware here.
  res.status(200).json({ message: 'Login successful', user });
});

module.exports = router;
