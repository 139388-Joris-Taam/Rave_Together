function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    
    // Send the message to the server (not implemented in this example)
    console.log('Sending message:', message);

    // Clear the input field
    messageInput.value = '';
}
