import React, { useState } from 'react';
import s from './Social.module.css';

//importing icons
import gif_icon from './icons/gif.png'
import upload_icon from './icons/upload.png'

//importing profile pictures
import pfp1 from './pfp/pfp1.jpg'

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
			<div id={s.message1} className={`${s.texts}`}>
				<img src={pfp1} alt="profile" className={s.profile_picture}/>
				<div id={s.text}>
					<p className={s.profile_name}>Shunsuke</p>
					<p className={s.msg1}>Hey, how are you?</p>
				</div>
			</div>

			<div id={s.message1} className={`${s.texts}`}>
				<img src={pfp1} alt="profile" className={s.profile_picture}/>
				<div id={s.text}>
					<p className={s.profile_name}>Shunsuke</p>
					<p className={s.msg1}>Hey, how are you?</p>
				</div>
			</div>
		</div>

	{/* textingbar */}
		<div id={s.bottom}>
			<img src={upload_icon} alt="upload_icon" className={` ${s.bottom_icon}`}/>
			<input id={s.enter_text} placeholder="text here" />
			<div className={`${s.right}`}>
			<img src={gif_icon} alt="gif_icon" className={`${s.bottom_icon}`}/>
			<div className={`${s.bottom_icon} ${s.emoji}`} onMouseEnter={changeEmoji}>{currentEmoji}</div>
			</div>
		</div>
	</div>
</div>
)
}

export default Social;