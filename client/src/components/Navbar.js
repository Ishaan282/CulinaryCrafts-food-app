import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './Authentication/context/AuthContext';
import './Navbar.css';
import { useState, useEffect } from 'react';
import ShoppingList from './Shoppinglist/ShoppingList';

const Navbar = () => {
  const [openShoppingList, setOpenShoppingList] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/Home" className="logo-name">
          CulinaryCrafts<i className="fa-solid fa-carrot" style={{ color: '#eb750d' }}></i>
        </Link>
      </div>
      
      <div className="links">
        <Link to="/Home" className="nav-link">Home</Link>
        <Link to="/Recipes" className="nav-link">Recipes <i className="fa-solid fa-angle-down"></i></Link>
        <Link to="/Social" className="nav-link">Socials</Link>
        <Link to="/Incrediants" className="nav-link">Ingrediants</Link>
        <Link to="#" className="nav-link" onClick={() => setOpenShoppingList(true)}>Shopping List</Link>
      </div>

      <div className="login">
        {user ? (
          <div className="user-auth">
            <span className="username-display">Hi, {user.username}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
            <Link to="/Cart" className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        ) : (
          <div className="guest-auth">
            <Link to="/Login" className="login-btn">Login / Sign up</Link>
            <Link to="/Cart" className="cart-btn">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        )}
      </div>

      {openShoppingList && <ShoppingList setOpenShoppingList={setOpenShoppingList} />}
    </nav>
  );
};

export default Navbar;