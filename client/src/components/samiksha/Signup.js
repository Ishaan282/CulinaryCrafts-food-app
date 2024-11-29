// SignupPage.js
import React, { useState, useEffect } from 'react';
// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import a from './Signup.module.css'; 
import signupImage from './Assets/signupimage.jpg';
import {registerService} from '../samiksha/services/auth.service';

const Signup= () => {
    const navigate = useNavigate();
    const [input ,setInput]=useState({
        name:"",
        email:"",
        password:"",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
          const response = registerService(input.name, input.email, input.password);
          if(response.status){
            console.log("Signup Successful");
            navigate("/login");
          }
          else{
              alert("Signup Unsuccessful");
          }
        }
        catch(error){
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        }
        navigate("/login");
      };
   
  return (
    <div className={a.authContainer}>
      <div className={a.authForm}>
        <h2 className={a.authTitle}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" value={input.name} onChange={(e) => setInput({...input,[e.target.name] : e.target.value, })} type="text" placeholder="Username"  className={a.inputField} />
          <input name="email" value={input.email} onChange={(e) => setInput({...input,[e.target.name] : e.target.value, })} type="email" placeholder="Email" className={a.inputField} />
          <input name="password" value={input.password} onChange={(e) => setInput({...input,[e.target.name] : e.target.value, })} type="password" placeholder="Password" className={a.inputField} />
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
