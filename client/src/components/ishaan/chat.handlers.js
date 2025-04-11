// Handles text message submission
export const handleTextMessageSubmit = async (event, textMessage, setTextMessage, sendMessage, setMessages, setError, socket) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        if (textMessage.trim() !== '') {
            try {
                const newMessage = await sendMessage(textMessage); // Make sure sendMessage is passed correctly
                setTextMessage('');
                socket.emit('chat message', newMessage); // Emit the new message event
                socket.emit('typing', { typing: false }); // Emit typing event
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
        const reader = new FileReader();
        reader.onloadend = () => {
            // Get the base64 string from the file
            const base64Image = reader.result;

            // Send the base64 image to the backend (as the 'picture' field)
            sendMessage('', base64Image).then(newMessage => {
                socket.emit('chat message', newMessage);
            }).catch(error => {
                setError(error.message);
            });
        };
        reader.readAsDataURL(file); // Read the file as a base64 string
    }
};


// Handles deleting messages
export const handleDeleteMessage = async (index, messages, deleteMessage, setMessages, setError, socket) => {
    const messageToDelete = messages[index];
    try {
        await deleteMessage(messageToDelete._id);
        setMessages((prevMessages) => prevMessages.filter((_, i) => i !== index));
        socket.emit('delete message', messageToDelete._id);
    } catch (error) {
        setError(error.message);
    }
};
