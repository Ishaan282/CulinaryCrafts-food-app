import React from 'react';
import s from './Social.module.css';

//importing icons
import gif_icon from './icons/gif.svg'
import upload_icon from './icons/upload.svg'

function Social() {
  return (
    <div id={s.main}>
      <div id={s.bottom}>
      <img src={upload_icon} alt="upload_icon" className={` ${s.bottom_icon}`}/>
        <img src={gif_icon} alt="gif_icon" className={`${s.bottom_icon}`}/>
      </div>
    </div>
  )
}

export default Social;
