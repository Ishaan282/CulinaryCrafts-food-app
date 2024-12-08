// LoginPage.js
import React, { useState } from 'react';
// import React from 'react';
import { Link } from 'react-router-dom';
import a from './Login.module.css'; 
import loginImage from './Assets/loginimg.jpg'; 
import { useNavigate } from 'react-router-dom';
import { loginService } from '../services/auth.service';

const Login = () => {
    const navigate = useNavigate();
    const [input ,setInput]=useState({
        email:"",
        password:"",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        try{
            loginService(input.email, input.password)
            .then((data) => {
                if(data.status){
                  console.log("Login Successful");
                  navigate("/Home", { state: { user: data.user } });
                }
                else{
                    alert("Incorrect email or password");
                }
            });
        }
        catch(error){
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        }
      };

  return (
    <div className={a.authContainer}>
      <div className={a.authImage}>
        <img src={loginImage} alt="Login" className={a.image} />
      </div>
      <div className={a.authForm}>
        <h2 className={a.authTitle}>Login</h2>
        <form onSubmit={handleLogin}>
          <input name="email" value={input.email} onChange={(e) => setInput({...input,[e.target.name] : e.target.value, })} type="email" placeholder="Email"  className={a.inputField} />
          <input name="password" value={input.password} onChange={(e) => setInput({...input,[e.target.name] : e.target.value, })} type="password" placeholder="Password"className={a.inputField} />
          <button type="submit" className={a.submitButton}>Login</button>
        </form>
        <p className={a.switchAuth}>New here? <Link to="/signup" className={a.switchLink}>Sign up now</Link></p>
      </div>
    </div>
  );
};

export default Login;


