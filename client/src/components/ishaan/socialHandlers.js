// Handles file selection and image upload
export const handleFileSelect = (event, setSelectedImage, sendMessage, setMessages, setError) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result);
            sendMessage('', reader.result)
                .then(newMessage => setMessages(prevMessages => [...prevMessages, newMessage]))
                .catch(error => setError(error.message));
        };
        reader.readAsDataURL(file);
    }
};

// Handles text message submission
export const handleTextMessageSubmit = async (event, textMessage, setTextMessage, sendMessage, setMessages, setError) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        if (textMessage.trim() !== '') {
            try {
                const newMessage = await sendMessage(textMessage);
                setMessages(prevMessages => [...prevMessages, newMessage]);
                setTextMessage('');
            } catch (error) {
                setError(error.message);
            }
        }
    }
};

// Handles deleting messages
export const handleDeleteMessage = async (index, messages, deleteMessage, setMessages, setError) => {
    const messageToDelete = messages[index];
    try {
        await deleteMessage(messageToDelete._id);
        const newMessages = messages.filter((_, i) => i !== index);
        setMessages(newMessages);
    } catch (error) {
        setError(error.message);
    }
};
