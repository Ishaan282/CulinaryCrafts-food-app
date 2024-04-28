import React from 'react';
import s from '../Social.module.css';

function Message({ id, imgSrc, name, message, messageClass, photo }) {
    const formattedMessage = message.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <div className={s.profile2}>
            <img src={imgSrc} alt="profile" className={s.profile_picture}/>
            <div id={s.text}>
                <p className={s.profile_name}>{name}</p>
                <p className={messageClass} style={{marginBottom:`-10px`}}>{formattedMessage}</p>
                {photo && <img src={photo} alt="send" className={s.photo} />}
            </div>
        </div>
    );
}

export default Message;