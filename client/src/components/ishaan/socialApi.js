// socialApi.js
import axios from 'axios';

export const fetchMessages = async () => {
    try {
        const response = await axios.get('/Social');
        return response.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw new Error('Failed to load messages.');
    }
};

export const sendMessage = async (message, picture = '') => {
    const newMessage = {
        message: message.trim(),
        picture,
        profileName: "Jester",
    };

    try {
        const response = await axios.post('/Social', newMessage);
        return response.data;
    } catch (error) {
        console.error('Failed to send message:', error);
        throw new Error('Failed to send message.');
    }
};

export const deleteMessage = async (messageId) => {
    try {
        await axios.delete(`/Social/${messageId}`);
    } catch (error) {
        console.error('Error deleting message:', error);
        throw new Error('Failed to delete message.');
    }
};