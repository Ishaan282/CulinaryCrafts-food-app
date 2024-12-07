import React, { useMemo } from 'react';
import s from '../Social.module.css';
import delete_icon from '../icons/delete.png';

function Message({ id, name, message, messageClass, photo, onDelete }) {
    const formattedMessage = useMemo(() => {
        return message?.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    }, [message]);

    return (
        <div className={s.profile2}>
            <div id={s.text}>
                <p className={s.profile_name}>{name}</p>
                <p className={messageClass} style={{ marginBottom: `-10px` }}>
                    {formattedMessage}
                </p>
                {photo && <img src={photo} alt="Message content" className={s.photo} />} {/* Display image here */}
            </div>
            <img src={delete_icon} alt="Delete message" className={`${s.delete} ${s.deleteIcon}`} onClick={onDelete} />
        </div>
    );
}

export default Message;