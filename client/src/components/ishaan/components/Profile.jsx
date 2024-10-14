import React from 'react';
import s from '../Social.module.css';

// Profile component to display just the name
function Profile({ name }) {
    return (
        <div className={s.profile}>
            <p className={s.profile_name}>{name}</p>
        </div>
    );
}

export default Profile;
