import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/samiksha/Home';
import Cart from './components/sameer/Cart';
import Social from './components/ishaan/Social';
import Login from './components/samiksha/Login';
import Signup from './components/samiksha/Signup';
import Recipes from './components/sanjal/Recipes';
import Incrediants from './components/sameer/Incrediants'
import { ShopContextProvider } from "./components/sameer/context/shop-context";


function App() {
  return (
    <ShopContextProvider>
    <BrowserRouter>
    <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Incrediants" element={<Incrediants />} />
          <Route path="/Social" element={<Social />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/CheeseCake" element={<CheeseCake />} />
        </Routes>
      
    </BrowserRouter>
    </ShopContextProvider>
    
  );
}

export default App;
