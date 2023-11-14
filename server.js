// server.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const { connectToDatabase } = require('./utils/dbconnect');
const RateLimiter = require('./utils/ratelimiter');
const musicController = require('./controllers/musicController');
const userController = require('./controllers/userController');
const socketController = require('./controllers/socketController');
const indexRouter = require('./routers/index');
const musicRouter = require('./routers/music');
const userRouter = require('./routers/user');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Rate limiter setup
const rateLimiter = new RateLimiter(5, 60000); // Allow 5 requests per minute

// Middleware
app.use(bodyParser.json());
app.use((req, res, next) => {
    const clientIp = req.ip; // Replace with the appropriate method to get the client's IP
    if (!rateLimiter.isAllowed(clientIp)) {
        return res.status(429).json({ message: 'Too many requests. Please try again later.' });
    }
    next();
});

// Database connection setup
connectToDatabase();

// Routers setup
app.use('/', indexRouter);
app.use('/music', musicRouter);
app.use('/user', userRouter);

// Initialize socket
socketController.initializeSocket(io);

// Music and User controllers setup
// (Note: You should have these controllers already defined in musicController.js and userController.js)
app.post('/music/play', musicController.playTrack);
app.post('/music/addToQueue', musicController.addToQueue);

app.post('/user/addToQueue', userController.addToQueue);
app.post('/user/removeFromQueue', userController.removeFromQueue);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
