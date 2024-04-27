import React, { useState } from 'react';
import s from './Social.module.css';

//importing icons
import gif_icon from './icons/gif.png';
import upload_icon from './icons/upload.png';

//importing profile pictures
import pfp1 from './pfp/pfp1.jpg';

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

    function Profile({ id, imgSrc, name, containerClass, imgClass, nameClass }) {
        return (
            <div id={id} className={containerClass}>
                <img src={imgSrc} alt="profile" className={imgClass}/>
                <p className={nameClass}>{name}</p>
            </div>
        );
    }

    // Define Message component here
    function Message({ id, imgSrc, name, message, containerClass, imgClass, nameClass, messageClass }) {
        return (
            <div id={id} className={containerClass}>
                <img src={imgSrc} alt="profile" className={imgClass}/>
                <div id={s.text}>
                    <p className={nameClass}>{name}</p>
                    <p className={messageClass}>{message}</p>
                </div>
            </div>
        );
    }

    const [messages, setMessages] = useState([]);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            const textInput = event.target.value.trim();
            if (textInput !== '') {
                setMessages(prevMessages => [...prevMessages, { id: s.message1, imgSrc: pfp1, name: "Shunsuke", message: textInput, containerClass: s.texts, imgClass: s.profile_picture, nameClass: s.profile_name, messageClass: s.msg1 }]);
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
                    <Profile id={s.pr1} imgSrc={pfp1} name="Shunsuke" containerClass={s.profile} imgClass={s.profile_picture} nameClass={s.profile_name} />
                    <Profile id={s.pr2} imgSrc={pfp1} name="Shunsuke" containerClass={s.profile} imgClass={s.profile_picture} nameClass={s.profile_name} />
                </div>
            </div>

            {/* chatting area  */}
            <div className={`${s.main2}`}>
                <div className={`${s.chat}`}>
				<Message id={s.message1} imgSrc={pfp1} name="Shunsuke" message="Hey, how are you?" containerClass={s.texts} imgClass={s.profile_picture} nameClass={s.profile_name} messageClass={s.msg1} />
                    {messages.map((message, index) => (
                        <Message key={index} {...message} />
                    ))}
                </div>

            {/* textingbar */}
                <div id={s.bottom}>
                    <img src={upload_icon} alt="upload_icon" className={` ${s.bottom_icon}`}/>
                    <input id={s.enter_text} placeholder="text here" onKeyPress={handleKeyPress} />
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