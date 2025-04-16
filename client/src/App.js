import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/Authentication/context/AuthContext';
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

//recipeRoutes 
import recipeRoutes from './components/Recipe_Section/recipeRoutes';
import ProtectedRoute from './components/Authentication/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ShopContextProvider>
          <Navbar />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Protected routes */}
            <Route path="/cart" element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } />
            <Route path="/incrediants" element={
              <ProtectedRoute>
                <Incrediants />
              </ProtectedRoute>
            } />
            <Route path="/social" element={
              <ProtectedRoute>
                <Social />
              </ProtectedRoute>
            } />
            <Route path="/recipes" element={
              <ProtectedRoute>
                <Recipes />
              </ProtectedRoute>
            } />
            <Route path="/shopping-list" element={
              <ProtectedRoute>
                <ShoppingList />
              </ProtectedRoute>
            } />
            
            {/* Protected dynamic recipe routes */}
            {Array.isArray(recipeRoutes) && 
              recipeRoutes.map((route) => (
                <Route 
                  key={route.key} 
                  path={route.path} 
                  element={
                    <ProtectedRoute>
                      {route.element}
                    </ProtectedRoute>
                  } 
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