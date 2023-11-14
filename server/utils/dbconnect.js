const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        // Replace 'YOUR_ACTUAL_MONGODB_USERNAME' and 'YOUR_ACTUAL_MONGODB_PASSWORD' with your actual MongoDB username and password.
        const username = 'Eddard';
        const password = 'Vliegendebeer30';
        const dbName = 'ravetogether'; // Replace with your actual database name

        const uri = `mongodb+srv://${username}:${password}@ravetogether.hxtliya.mongodb.net/${dbName}?retryWrites=true&w=majority`;

        await mongoose.connect(uri, {
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
