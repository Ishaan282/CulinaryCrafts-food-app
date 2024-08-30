import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/samiksha/Home';
import Cart from './components/sameer/Cart';
import Recipes from './components/sanjal/Recipes';
import Social from './components/ishaan/Social';
import Login from './components/samiksha/Login';
import Signup from './components/samiksha/Signup';
import Incrediants from './components/sameer/Incrediants';
import { ShopContextProvider } from "./components/sameer/context/shop-context";

import recipeRoutes from './components/sanjal/recipeRoutes'; // Import the recipeRoutes array
import RecipeLinks from './components/sanjal/RecipeLinks'; // Import the RecipeLinks component

import Error404 from './404'; // Import the Error404 component

function App() {
  return (
    <ShopContextProvider>
      <Router>
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
          <Route path="/recipie" element={<RecipeLinks />} /> {/* Add a route for the RecipeLinks component */}
          {recipeRoutes} {/* Use the recipeRoutes array */}
          <Route path="*" element={<Error404 />} /> {/* Catch-all route for undefined paths */}
        </Routes>
      </Router>
    </ShopContextProvider>
  );
}

export default App;