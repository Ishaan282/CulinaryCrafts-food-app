import React, { useState, useEffect, useRef } from 'react';
import { fetchMessages, sendMessage, deleteMessage } from './socialApi';
import { handleFileSelect, handleTextMessageSubmit, handleDeleteMessage } from './socialHandlers';
import s from './Social.module.css';
import Message from './components/Message.jsx';
import Profile from './components/Profile.jsx';
import io from 'socket.io-client';
import upload_icon from './icons/upload.png';

function Social() {
    const [messages, setMessages] = useState([]); // Ensure messages is initialized as an array
    const [textMessage, setTextMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const socket = useRef(null);

    useEffect(() => {
        socket.current = io();
    
        socket.current.on('chat message', (msg) => {
            setMessages((prevMessages) => [...prevMessages, msg]); // Ensure prevMessages is iterable
        });
    
        socket.current.on('typing', (data) => {
            setIsTyping(data.typing);
        });
    
        socket.current.on('delete message', (messageId) => {
            setMessages((prevMessages) => prevMessages.filter((message) => message._id !== messageId));
        });
    
        return () => {
            socket.current.disconnect();
        };
    }, []);

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

    const chatRef = useRef(null);
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    const fileInputRef = useRef();

    const handleTextMessageChange = (e) => {
        setTextMessage(e.target.value);
        socket.current.emit('typing', { typing: e.target.value.length > 0 });

        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    return (
        <div id={s.main}>
            <div className={`${s.main1}`}>
                <header id={`${s.head}`}>People</header>
                <hr style={{ border: 'none', borderTop: '2px solid black', width: '103%', margin: `0 -3%` }} />
                <div id={s.profiles}>
                    <Profile id={s.pr1} name="Lucifer hamster" />
                    <Profile id={s.pr2} name="Bread" />
                </div>
            </div>

            <div className={`${s.main2}`}>
                <div className={`${s.chat}`} ref={chatRef}>
                    {loading ? (
                        <p>Loading messages...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : messages.length > 0 ? (
                        messages.map((message) => (
                            <Message
                                key={message._id}
                                id={message._id}
                                message={message.message}
                                photo={message.picture} // Photo is either Base64 or URL
                                imgSrc={message.profilePicture}
                                name={message.profileName}
                                onDelete={() => handleDeleteMessage(message._id, messages, deleteMessage, setMessages, setError, socket.current)}
                            />
                        ))
                    ) : (
                        <p>No messages yet.</p>
                    )}
                    {isTyping && <p>Someone is typing...</p>}
                </div>

                <div id={s.bottom}>
                    <input type="file" style={{ display: 'none' }} onChange={(e) => handleFileSelect(e, sendMessage, setMessages, setError, socket.current)} ref={fileInputRef} />
                    <img src={upload_icon} alt="Upload file" className={s.bottom_icon} onClick={() => fileInputRef.current.click()} />
                    <textarea
                        id={s.enter_text}
                        placeholder="Type a message..."
                        value={textMessage}
                        onChange={handleTextMessageChange}
                        onKeyDown={(e) => handleTextMessageSubmit(e, textMessage, setTextMessage, sendMessage, setMessages, setError, socket.current)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Social;