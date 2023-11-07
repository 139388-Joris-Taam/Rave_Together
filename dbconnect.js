const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace '<YOUR_MONGODB_URI>' with your actual MongoDB connection URI.
    const mongoURI = 'mongodb://localhost/RaveTogether'; // Use your MongoDB URI here

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB database');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Terminate the application on a DB connection error
  }
};

module.exports = connectDB;
