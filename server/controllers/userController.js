const users = [];

// Function to add a new user
const addToQueue = (req, res) => {
    const { username, socketId } = req.body;

    const existingUser = users.find((user) => user.username === username);

    if (!existingUser) {
        const user = { username, socketId };
        users.push(user);
        return res.json({ user, error: null });
    }

    return res.status(400).json({ user: null, error: 'Username is already taken. Please choose a different one.' });
};

// Function to remove a user
const removeFromQueue = (req, res) => {
    const { socketId } = req.body;

    const index = users.findIndex((user) => user.socketId === socketId);

    if (index !== -1) {
        const removedUser = users.splice(index, 1)[0];
        return res.json({ success: true, removedUser });
    }

    return res.status(404).json({ success: false, message: 'User not found.' });
};

// Function to get the queue
const getQueue = (req, res) => {
    return res.json({ users });
};

module.exports = {
    addToQueue,
    removeFromQueue,
    getQueue,
    // Add more user-related functions as needed
};
