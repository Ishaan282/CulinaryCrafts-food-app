// SignupPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import a from './Signup.module.css'; // Import your CSS module

const Signup = () => {
  return (
    <div className={a.authContainer}>
      <div className={a.authForm}>
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Login now</Link></p>
      </div>
    </div>
  );
};

export default Signup;
