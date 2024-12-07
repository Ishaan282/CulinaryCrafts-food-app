import axios from 'axios';

// Fetch messages from the server
export const fetchMessages = async () => {
    try {
        const response = await axios.get('/Social');
        return response.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw new Error('Failed to load messages.');
    }
};

// Send a message with or without an image
export const sendMessage = async (message, picture = '') => {
    const newMessage = {
        message: message.trim(),
        picture, // picture URL is passed here
        profileName: "User", // Replace with actual user name if applicable
    };
    try {
        const response = await axios.post('/Social', newMessage);
        return response.data;
    } catch (error) {
        console.error('Failed to send message:', error);
        throw new Error('Failed to send message.');
    }
};

// Delete a message by ID
export const deleteMessage = async (messageId) => {
    try {
        await axios.delete(`/Social/${messageId}`);
    } catch (error) {
        console.error('Error deleting message:', error);
        throw new Error('Failed to delete message.');
    }
};

// Upload image to the server and get the URL (OneDrive)
export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file); // Append the file to the form data

    try {
        const response = await axios.post('/Social/upload-image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data.picture; // The URL of the uploaded image
    } catch (error) {
        console.error('Error uploading image:', error);
        throw new Error('Failed to upload image.');
    }
};
