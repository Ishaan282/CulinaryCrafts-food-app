import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Home from './samiksha/Home';
import Cart from './sameer/Cart';
import Recipes from './sanjal/Recipes';
import Social from './ishaan/Social';

const Navbar = () => {
  return (
    <nav className="navbar">
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
