import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import s from './Social.module.css';
import Message from './componenets/Message.jsx';
import Profile from './componenets/Profile.jsx';

//importing icons
import gif_icon from './icons/gif.png';
import upload_icon from './icons/upload.png';
import delete_icon from './icons/delete.png';

//importing profile pictures
import pfp1 from './pfp/pfp1.jpg';
import pfp2 from './pfp/pfp2.jpg';
import pfp3 from './pfp/pfp3.png';
import pfp4 from './pfp/pfp4.png';
import pfp5 from './pfp/pfp5.jpg';
import pfp6 from './pfp/pfp6.jpg';

function Social() {
    // Initialize the messages state
    const [messages, setMessages] = useState([]);
    const [textMessage, setTextMessage] = useState('');

    // Fetch messages from the backend
    useEffect(() => {
        axios.get('/Social')
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the messages!', error);
            });
    }, []);

    //!scrolling from botom to top 
    // Create a reference to the chat container
    const chatRef = useRef(null);

    // Scroll to the bottom of the chat container whenever messages change
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    //! deleting message 
    const deleteMessage = (index) => {
        const messageToDelete = messages[index];
        axios.delete(`/Social/${messageToDelete._id}`)
            .then(() => {
                const newMessages = messages.filter((_, i) => i !== index);
                setMessages(newMessages);
            })
            .catch(error => {
                console.error('There was an error deleting the message!', error);
            });
    };

    //!sending images
    // Add a new state to hold the selected image
    const [selectedImage, setSelectedImage] = useState(null);

    // Add a new function to handle file selection
    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
                // Send the image as a message
                const newMessage = {
                    message: '',
                    picture: reader.result,
                    profileName: "Jester",
                    profilePicture: pfp5
                };
                axios.post('/Social', newMessage)
                    .then(response => {
                        setMessages(prevMessages => [...prevMessages, response.data]);
                    })
                    .catch(error => {
                        console.error('There was an error sending the message!', error);
                    });
            };
            reader.readAsDataURL(file);
        }
    };

    // Add a new function to trigger file selection
    const triggerFileSelect = () => {
        fileInputRef.current.click();
    };

    // Add a ref to the file input
    const fileInputRef = useRef();

    // Handle text message submission
    const handleTextMessageSubmit = (event) => {
        if (event.key === 'Enter' && !event.shiftKey && textMessage.trim() !== '') {
            event.preventDefault(); // Prevent the default behavior of the Enter key
            const newMessage = {
                message: textMessage,
                picture: '',
                profileName: "Jester",
                profilePicture: pfp5
            };
            axios.post('/Social', newMessage)
                .then(response => {
                    setMessages(prevMessages => [...prevMessages, response.data]);
                    setTextMessage(''); // Clear the input field
                })
                .catch(error => {
                    console.error('There was an error sending the message!', error);
                });
        }
    };

    return (
        <div id={s.main}>
            {/* sidebar */}
            <div className={`${s.main1}`}>
                <header id={`${s.head}`}>
                    People
                </header>
                <hr style={{border: 'none', borderTop: '2px solid black', width: '103%',margin: `0 -3%`}} />

                <div id={s.profiles}>
                    <Profile id={s.pr1} imgSrc={pfp1} name="Lucifer hamster" />
                    <Profile id={s.pr2} imgSrc={pfp2} name="Bread" />
                    <Profile id={s.pr3} imgSrc={pfp3} name="Foxy" />
                    <Profile id={s.pr4} imgSrc={pfp4} name="Gumball" />
                    <Profile id={s.pr5} imgSrc={pfp5} name="Jester" />
                    <Profile id={s.pr6} imgSrc={pfp6} name="Peco" />
                </div>
            </div>

            {/* chatting area  */}
            <div className={`${s.main2}`}>
                <div className={`${s.chat}`} ref={chatRef}>
                    {messages.length > 0 ? (
                        messages.map((message, index) => (
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

                {/* textingbar */}
                <div id={s.bottom}>
                    <input type="file" style={{ display: 'none' }} onChange={handleFileSelect} ref={fileInputRef} />
                    <img src={upload_icon} alt="upload_icon" className={` ${s.bottom_icon}`} onClick={triggerFileSelect} />
                    <textarea 
                        id={s.enter_text} 
                        placeholder="text here" 
                        value={textMessage} 
                        onChange={(e) => setTextMessage(e.target.value)} 
                        onKeyDown={handleTextMessageSubmit} 
                    />
                    <div className={`${s.right}`}>
                        <img src={gif_icon} alt="gif_icon" className={`${s.bottom_icon}`} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Social;