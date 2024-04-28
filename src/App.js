import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/samiksha/Home';
import Cart from './components/sameer/Cart';
import Recipes from './components/sanjal/Recipes';
import Social from './components/ishaan/Social';
import Login from './components/samiksha/Login';
import Signup from './components/samiksha/Signup';

function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Social" element={<Social />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />

        </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
