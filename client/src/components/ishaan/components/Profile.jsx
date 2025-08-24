import s from "../Social.module.css"

// Profile component to display just the name
function Profile({ name }) {
  return (
    <div className={s.profile}>
      <div className={s.profile_avatar}>{name.charAt(0).toUpperCase()}</div>
      <p className={s.profile_name}>{name}</p>
    </div>
  )
}

export default Profile
