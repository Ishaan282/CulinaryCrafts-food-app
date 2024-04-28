// SignupPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import a from './Signup.module.css'; // Import your CSS module
import signupImage from './signupimage.jpg'; // Import your signup image

const Signup= () => {
  return (
    <div className={a.authContainer}>
      {/* <div className={a.authImage}>
        <img src={signupImage} alt="Signup" className={a.image} />
      </div> */}
      <div className={a.authForm}>
        <h2 className={a.authTitle}>Sign Up</h2>
        <form>
          <input type="text" placeholder="Username" className={a.inputField} />
          <input type="email" placeholder="Email" className={a.inputField} />
          <input type="password" placeholder="Password" className={a.inputField} />
          <button type="submit" className={a.submitButton}>Sign Up</button>
        </form>
        <p className={a.switchAuth}>Already have an account? <Link to="/login" className={a.switchLink}>Login now</Link></p>
      </div>
      <div className={a.authImage}>
        <img src={signupImage} alt="Signup" className={a.image} />
      </div>
    </div>
  );
};

export default Signup;
