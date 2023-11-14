// socketController.js
const socketIO = require('socket.io');

let io;

const initializeSocket = (server) => {
    io = socketIO(server);

    io.on('connection', (socket) => {
        console.log('A user connected');

        // Example: Handle 'play_track' event
        socket.on('play_track', (url) => {
            io.emit('play_track', url);
        });

        // Add more socket event handlers as needed
    });
};

module.exports = {
    initializeSocket,
    // Add more socket-related functions as needed
};
