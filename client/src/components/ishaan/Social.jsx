import React, { useState, useEffect, useRef } from 'react';
import { fetchMessages, sendMessage, deleteMessage } from './socialApi';
import { handleFileSelect, handleTextMessageSubmit, handleDeleteMessage } from './socialHandlers';
import s from './Social.module.css';
import Message from './components/Message.jsx';
import Profile from './components/Profile.jsx';

// Importing icons
import upload_icon from './icons/upload.png';

function Social() {
    // States for messages, text input, image, loading, and error
    const [messages, setMessages] = useState([]);
    const [textMessage, setTextMessage] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    //! Fetch messages from the backend on mount
    useEffect(() => {
        const loadMessages = async () => {
            setLoading(true);
            try {
                const data = await fetchMessages();
                setMessages(data);
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };
        loadMessages();
    }, []);

    // Chat container ref to manage auto-scrolling
    const chatRef = useRef(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    // File input ref
    const fileInputRef = useRef();

    return (
        <div id={s.main}>
            {/* Sidebar */}
            <div className={`${s.main1}`}>
                <header id={`${s.head}`}>  People </header>
                <hr style={{ border: 'none', borderTop: '2px solid black', width: '103%', margin: `0 -3%` }} />

                <div id={s.profiles}>
                    <Profile id={s.pr1} name="Lucifer hamster" />
                    <Profile id={s.pr2} name="Bread" />
                </div>
            </div>

            {/* Chatting area */}
            <div className={`${s.main2}`}>
                <div className={`${s.chat}`} ref={chatRef}>
                    {loading ? (
                        <p>Loading messages...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : messages.length > 0 ? (
                        messages.map((message, index) => (
                            <Message
                                key={index}
                                id={message._id}
                                message={message.message}
                                photo={message.picture}
                                imgSrc={message.profilePicture}
                                name={message.profileName}
                                onDelete={() => handleDeleteMessage(index, messages, deleteMessage, setMessages, setError)}
                            />
                        ))
                    ) : (
                        <p>No messages yet.</p>
                    )}
                </div>

                {/* Texting bar */}
                <div id={s.bottom}>
                    <input type="file" style={{ display: 'none' }} onChange={(e) => handleFileSelect(e, setSelectedImage, sendMessage, setMessages, setError)} ref={fileInputRef} />
                    <img src={upload_icon} alt="Upload file" className={s.bottom_icon} onClick={() => fileInputRef.current.click()} />
                    <textarea
                        id={s.enter_text}
                        placeholder="Type a message..."
                        value={textMessage}
                        onChange={(e) => setTextMessage(e.target.value)}
                        onKeyDown={(e) => handleTextMessageSubmit(e, textMessage, setTextMessage, sendMessage, setMessages, setError)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Social;
