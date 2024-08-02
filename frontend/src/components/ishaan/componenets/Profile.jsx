import React from 'react';
import s from '../Social.module.css';

//profile component to display profile pictures and names
function Profile({ id, imgSrc, name}) {
    return (
        <div id={id} className={s.profile}>
            <img src={imgSrc} alt="profile" className={s.profile_picture}/>
            <p className={s.profile_name}>{name}</p>
        </div>
    );
}

export default Profile;