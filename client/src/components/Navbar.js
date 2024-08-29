import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Home from './samiksha/Home';
import Cart from './sameer/Incrediants';
import Recipes from './sanjal/Recipes';
import Social from './ishaan/Social';
import Login from './samiksha/Login'
import { useState } from 'react';
import { useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  // const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedin");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  // Add useEffect to update isLoggedIn state when localStorage changes
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedin");
    setIsLoggedIn(loggedIn === "true");
  }, [localStorage.getItem("loggedin")]);
  
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    localStorage.removeItem("name"); 
    setIsLoggedIn(false);
   
    // Reset user name to default value
    // localStorage.removeItem("user");
    navigate("/login");
  };


const [scrolled, setScrolled] = useState(false);

// eslint-disable-next-line
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);




  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/Home " className="logo-name">CulinaryCrafts<i className="fa-solid fa-carrot" style={{ color: '#eb750d' }} ></i></Link>
      </div>
      <div className="links">
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/Recipes" className="nav-link">Recipes</Link>
        <Link to="/Social" className="nav-link">Socials</Link>
        <Link to="/Incrediants" className="nav-link">Ingrediants</Link>
      </div>
      <div className="login"> 
      {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        ) : (
          <Link to="/Login" className="login-btn">Login / Sign up</Link>
        )}
        {/* <Link to="/Login" className="login-btn">Login / Sign up</Link> */}
        
        <Link to="/Cart" className="cart-btn"><i className="fa-solid fa-cart-shopping" style={{ color: '#3d3d3d' }}></i></Link>
        
      </div>
      
      
    </nav>
  );
};

export default Navbar;
