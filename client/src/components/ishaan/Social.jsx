import React, { useState, useEffect, useRef, useMemo } from 'react';
import axios from 'axios';
import s from './Social.module.css';
import Message from './componenets/Message.jsx';
import Profile from './componenets/Profile.jsx';

// Importing icons
import gif_icon from './icons/gif.png';
import upload_icon from './icons/upload.png';

// Importing profile pictures
import pfp1 from './pfp/pfp1.jpg';
import pfp2 from './pfp/pfp2.jpg';
import pfp3 from './pfp/pfp3.png';
import pfp4 from './pfp/pfp4.png';
import pfp5 from './pfp/pfp5.jpg';
import pfp6 from './pfp/pfp6.jpg';

function Social() {
    // States for messages, text input, image, loading, and error
    const [messages, setMessages] = useState([]);
    const [textMessage, setTextMessage] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch messages from the backend on mount
    useEffect(() => {
        setLoading(true);
        axios.get('/Social')
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                console.error('Error fetching messages:', error);
                setError('Failed to load messages.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // Chat container ref to manage auto-scrolling
    const chatRef = useRef(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    // Deleting message
    const deleteMessage = (index) => {
        const messageToDelete = messages[index];
        axios.delete(`/Social/${messageToDelete._id}`)
            .then(() => {
                const newMessages = messages.filter((_, i) => i !== index);
                setMessages(newMessages);
            })
            .catch(error => {
                console.error('Error deleting message:', error);
                setError('Failed to delete message.');
            });
    };

    // Handling image upload
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
                const newMessage = {
                    message: '',
                    picture: reader.result,
                    profileName: "Jester",
                    profilePicture: pfp5
                };
                axios.post('/Social', newMessage)
                    .then(response => {
                        setMessages(prevMessages => Array.isArray(prevMessages) ? [...prevMessages, response.data] : [response.data]);
                    })
                    .catch(error => {
                        console.error('Error sending message:', error);
                        setError('Failed to send image.');
                    });
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileSelect = () => {
        fileInputRef.current.click();
    };

    const fileInputRef = useRef();

    // Handle text message submission
    const handleTextMessageSubmit = async (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            if (textMessage.trim() !== '') {
                const newMessage = {
                    message: textMessage.trim(),
                    picture: '',
                    profileName: "Jester",
                    profilePicture: pfp5
                };
    
                try {
                    const response = await axios.post('/Social', newMessage);
                    setMessages(prevMessages => [...prevMessages, response.data]);
                    setTextMessage('');
                } catch (error) {
                    console.error('Failed to send message:', error.response ? error.response.data : error.message);
                    alert(`Failed to send message: ${error.response ? error.response.data.error : error.message}`);
                }
            }
        }
    };
    
    

    // Memoized messages list to avoid re-renders
    const memoizedMessages = useMemo(() => messages, [messages]);

    return (
        <div id={s.main}>
            {/* Sidebar */}
            <div className={`${s.main1}`}>
                <header id={`${s.head}`}>
                    People
                </header>
                <hr style={{ border: 'none', borderTop: '2px solid black', width: '103%', margin: `0 -3%` }} />

                <div id={s.profiles}>
                    <Profile id={s.pr1} imgSrc={pfp1} name="Lucifer hamster" />
                    <Profile id={s.pr2} imgSrc={pfp2} name="Bread" />
                    <Profile id={s.pr3} imgSrc={pfp3} name="Foxy" />
                    <Profile id={s.pr4} imgSrc={pfp4} name="Gumball" />
                    <Profile id={s.pr5} imgSrc={pfp5} name="Jester" />
                    <Profile id={s.pr6} imgSrc={pfp6} name="Peco" />
                </div>
            </div>

            {/* Chatting area */}
            <div className={`${s.main2}`}>
                <div className={`${s.chat}`} ref={chatRef}>
                    {loading ? (
                        <p>Loading messages...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : memoizedMessages.length > 0 ? (
                        memoizedMessages.map((message, index) => (
                            <Message 
                                key={index} 
                                id={message._id}
                                message={message.message} 
                                photo={message.picture} 
                                imgSrc={message.profilePicture} 
                                name={message.profileName} 
                                onDelete={() => deleteMessage(index)} 
                            />
                        ))
                    ) : (
                        <p>No messages yet.</p>
                    )}
                </div>

                {/* Texting bar */}
                <div id={s.bottom}>
                    <input type="file" style={{ display: 'none' }} onChange={handleFileSelect} ref={fileInputRef} />
                    <img src={upload_icon} alt="Upload file" className={s.bottom_icon} onClick={triggerFileSelect} />
                    <textarea 
                        id={s.enter_text} 
                        placeholder="Type a message..." 
                        value={textMessage} 
                        onChange={(e) => setTextMessage(e.target.value)} 
                        onKeyDown={handleTextMessageSubmit} 
                    />
                    <div className={s.right}>
                        <img src={gif_icon} alt="GIF icon" className={s.bottom_icon} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Social;
