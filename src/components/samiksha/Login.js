// LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import a from './Login.module.css'; // Import your CSS module
import loginImage from './loginimg.jpg'; // Import your login image

const Login = () => {
  return (
    <div className={a.authContainer}>
      <div className={a.authImage}>
        <img src={loginImage} alt="Login" className={a.image} />
      </div>
      <div className={a.authForm}>
        <h2 className={a.authTitle}>Login</h2>
        <form>
          <input type="email" placeholder="Email" className={a.inputField} />
          <input type="password" placeholder="Password" className={a.inputField} />
          <button type="submit" className={a.submitButton}>Login</button>
        </form>
        <p className={a.switchAuth}>New here? <Link to="/signup" className={a.switchLink}>Sign up now</Link></p>
      </div>
    </div>
  );
};

export default Login;
