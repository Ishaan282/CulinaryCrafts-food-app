import React from 'react';
import s from '../Social.module.css';
import delete_icon from '../icons/delete.png'

//Message component to display messages
function Message({ id, imgSrc, name, message, messageClass, photo, onDelete }) {
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
            <img src={delete_icon} alt="delete" className={`${s.delete} ${s.deleteIcon}`} onClick={onDelete} />
        </div>
    );
}

export default Message;