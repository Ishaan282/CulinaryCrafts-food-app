// LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import a from './Login.module.css'; // Import your CSS module

const Login = () => {
  return (
    <div className={a.authContainer}>
      <div className={a.authForm}>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p>New here? <Link to="/signup">Sign up now</Link></p>
      </div>
    </div>
  );
};

export default Login;
