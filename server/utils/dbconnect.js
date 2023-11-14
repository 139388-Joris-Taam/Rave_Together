
const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        // Replace 'YOUR_ACTUAL_MONGODB_URI' with your real MongoDB connection URI.
        await mongoose.connect('mongodb+srv://<Eddard>:<Vliegendebeer30>@ravetogether.hxtliya.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        process.exit(1);
    }
};

module.exports = { connectToDatabase };
