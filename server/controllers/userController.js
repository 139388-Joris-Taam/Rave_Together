// UserController.js
const users = [];

// Function to add a new user
const addUser = (username, socketId) => {
    const existingUser = users.find((user) => user.username === username);

    if (!existingUser) {
        const user = { username, socketId };
        users.push(user);
        return user;
    }

    return null;
};

// Function to remove a user
const removeUser = (socketId) => {
    const index = users.findIndex((user) => user.socketId === socketId);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }

    return null;
};

// Function to get user by socket ID
const getUserBySocketId = (socketId) => {
    return users.find((user) => user.socketId === socketId);
};

module.exports = {
    addUser,
    removeUser,
    getUserBySocketId,
    // Add more user-related functions as needed
};
