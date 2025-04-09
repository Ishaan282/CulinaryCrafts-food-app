import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ShopContextProvider } from './components/Ingrediants_Section/context/shop-context';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Cart from './components/Ingrediants_Section/Cart';
import Recipes from './components/Recipe_Section/Recipes';
import Social from './components/ishaan/Social';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import Incrediants from './components/Ingrediants_Section/Incrediants';
import ShoppingList from './components/Shoppinglist/ShoppingList';
import Error404 from './404';
import recipeRoutes from './components/Recipe_Section/recipeRoutes';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ShopContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/incrediants" element={<Incrediants />} />
            <Route path="/social" element={<Social />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Dynamic recipe routes */}
            {Array.isArray(recipeRoutes) && 
              recipeRoutes.map((route) => (
                <Route 
                  key={route.path} 
                  path={route.path} 
                  element={route.element} 
                />
              ))
            }
            
            {/* 404 Catch-all route */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </ShopContextProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;