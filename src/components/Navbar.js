import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Home from './samiksha/Home';
import Cart from './sameer/Cart';
import Recipes from './sanjal/Recipes';
import Social from './ishaan/Social';
import { useState } from 'react';
import { useEffect } from 'react';



const Navbar = () => {
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
        <Link to="/" className="logo-name">CulinaryCrafts<i className="fa-solid fa-carrot" style={{ color: '#ff5b14' }} ></i></Link>
      </div>
      <div className="links">
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/Recipes" className="nav-link">Recipes</Link>
        <Link to="/Social" className="nav-link">Socials</Link>
        <Link to="/Cart" className="nav-link">Cart</Link>
      </div>
      <div className="login">
        <Link to="/login" className="login-btn">Login / Sign up</Link>
        <Link to="/cart" className="cart-btn"><i class="fa-solid fa-cart-shopping" style={{ color: '#ff5b14' }}></i></Link>
      </div>
      
      
    </nav>
  );
};

export default Navbar;
