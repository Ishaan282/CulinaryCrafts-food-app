import React, { useState } from 'react';
import s from './Social.module.css';
import Message from './componenets/Message.jsx';
import Profile from './componenets/Profile.jsx';

//importing icons
import gif_icon from './icons/gif.png';
import upload_icon from './icons/upload.png';

//importing profile pictures
import pfp1 from './pfp/pfp1.jpg';
import pfp2 from './pfp/pfp2.jpg';

import test from './images/test.jpg';

function Social() {
    const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬', '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🤗', '🤔', '🤭', '🤫', '🤥', '😶', '😐', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱', '😴', '🤤', '😪', '😵', '🤐', '🥴', '🤢', '🤮', '🤧', '😷', '🤒', '🤕', '🤑', '🤠', '😈', '👿', '👹', '👺', '🤡', '👻', '💀', '☠️'];

    const getRandomEmoji = () => {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        return emojis[randomIndex];
    };

    const [currentEmoji, setCurrentEmoji] = useState(getRandomEmoji());

    const changeEmoji = () => {
        setCurrentEmoji(getRandomEmoji());
    };

    const [messages, setMessages] = useState([]);

    const handleInput = (event) => {
        event.target.style.height = 'auto';
        event.target.style.height = (event.target.scrollHeight) + 'px';
    };

const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        const textInput = event.target.value.trim();
        if (event.shiftKey) {
            // If the Shift key is being held down, insert a line break
            event.target.value += '\n';
        } else if (textInput !== '') {
            // If the Shift key is not being held down, send the message
            setMessages(prevMessages => [...prevMessages, { id: s.message1, imgSrc: pfp2, name: "Bread", message: textInput, containerClass: s.texts, messageClass: s.msg1 }]);
            event.target.value = '';
        }
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
                <Profile id={s.pr1} imgSrc={pfp1} name="Shunsuke" />
                <Profile id={s.pr2} imgSrc={pfp2} name="Bread" />
                <Profile id={s.pr3} imgSrc={pfp1} name="Shunsuke" />
            </div>
        </div>

        {/* chatting area  */}
        <div className={`${s.main2}`}>
            <div className={`${s.chat}`}>
                <Message id={s.message1} imgSrc={pfp1} name="Shunsuke" message="Hey, how are you?" containerClass={s.texts} messageClass={s.msg1} photo={test}/>
                
                {messages.map((message, index) => (
                    <Message key={index} {...message} />
                ))}
            </div>

        {/* textingbar */}
            <div id={s.bottom}>
                <img src={upload_icon} alt="upload_icon" className={` ${s.bottom_icon}`}/>
                <textarea id={s.enter_text} placeholder="text here" onKeyPress={handleKeyPress} onInput={handleInput} />
                <div className={`${s.right}`}>
                    <img src={gif_icon} alt="gif_icon" className={`${s.bottom_icon}`}/>
                    <div className={`${s.bottom_icon} ${s.emoji}`} onMouseEnter={changeEmoji}>{currentEmoji}</div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Social;