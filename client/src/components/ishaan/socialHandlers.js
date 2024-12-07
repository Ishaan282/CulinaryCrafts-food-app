import { sendMessage, uploadImage } from './socialApi'; // Import the new uploadImage function

// Handles text message submission
export const handleTextMessageSubmit = async (event, textMessage, setTextMessage, sendMessage, setMessages, setError, socket) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        if (textMessage.trim() !== '') {
            try {
                const newMessage = await sendMessage(textMessage); // Send the text message
                setTextMessage('');
                socket.emit('chat message', newMessage); // Emit the new message to socket
                socket.emit('typing', { typing: false });
            } catch (error) {
                setError(error.message);
            }
        }
    }
};

// Handles file selection and image upload
export const handleFileSelect = async (event, sendMessage, setMessages, setError, socket) => {
    const file = event.target.files[0];
    if (file) {
        try {
            // Upload the image to the backend
            const imageUrl = await uploadImage(file);

            // Once the image is uploaded, send the message with the image URL
            const messageData = {
                message: '', // Optionally, include a text message
                picture: imageUrl, // URL of the uploaded image
                profileName: 'User', // Replace with actual user profile name
            };

            await sendMessage(messageData.message, messageData.picture); // Send message with image URL

            // Emit the new message to the socket
            socket.emit('chat message', messageData);
        } catch (error) {
            setError('Error uploading image: ' + error.message);
        }
    }
};

// Handles deleting messages
export const handleDeleteMessage = async (messageId, messages, deleteMessage, setMessages, setError, socket) => {
    try {
        const messageToDelete = messages.find((message) => message._id === messageId);
        await deleteMessage(messageId, messageToDelete.picture); // Pass the picture URL to the deleteMessage function
        setMessages((prevMessages) => prevMessages.filter((message) => message._id !== messageId));
        socket.emit('delete message', messageId); // Emit message delete event
    } catch (error) {
        setError(error.message);
    }
};