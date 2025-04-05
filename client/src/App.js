import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Cart from './components/Ingrediants_Section/Cart';
import Recipes from './components/Recipe_Section/Recipes';
import Social from './components/ishaan/Social';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import Incrediants from './components/Ingrediants_Section/Incrediants';
import ShoppinList from './components/Shoppinglist/ShoppingList';

import { ShopContextProvider } from "./components/Ingrediants_Section/context/shop-context";

import recipeRoutes from './components/Recipe_Section/recipeRoutes'; // Import the recipeRoutes array

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
          <Route path= "/ShoppinList" element={<ShoppinList />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          {recipeRoutes} {/* Use the recipeRoutes array */}
          <Route path="*" element={<Error404 />} /> {/* Catch-all route for undefined paths */}
        </Routes>
      </Router>
    </ShopContextProvider>
  );
}

export default App;