//axios is used to make requests to the server
import axios from 'axios'; 

export const fetchUsers = async () => {
    try {
        const response = await axios.get('/api/auth/users');
        
        // Handle empty response
        if (response.data.message === "No users found") {
            return []; // Return empty array if no users
        }
        
        // Extract usernames from full user objects
        return response.data.map(user => user.username);
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error(error.response?.data?.error || 'Failed to load users');
    }
}

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
        profileName: "User",
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
