import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/Authentication/context/AuthContext';
import { ShopContextProvider } from './components/Ingrediants_Section/context/shop-context';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Error404 from './404';
import ProtectedRoute from './components/Authentication/ProtectedRoute';

// import Cart from './components/Ingrediants_Section/Cart';
// import Recipes from './components/Recipe_Section/Recipes';
// import Social from './components/ishaan/Social';
// import Login from './components/Authentication/Login';
// import Signup from './components/Authentication/Signup';
// import Incrediants from './components/Ingrediants_Section/Incrediants';
// import ShoppingList from './components/Shoppinglist/ShoppingList';
// import GenerateRecipePage from './components/CustomRecipes/generate-recipe-page';
// import recipeRoutes from './components/Recipe_Section/recipeRoutes';

const Cart = lazy(() => import('./components/Ingrediants_Section/Cart'));
const Recipes = lazy(() => import('./components/Recipe_Section/Recipes'));
const Social = lazy(() => import('./components/ishaan/Social'));
const Login = lazy(() => import('./components/Authentication/Login'));
const Signup = lazy(() => import('./components/Authentication/Signup'));
const Incrediants = lazy(() => import('./components/Ingrediants_Section/Incrediants'));
const ShoppingList = lazy(() => import('./components/Shoppinglist/ShoppingList'));
const GenerateRecipePage = lazy(() => import('./components/CustomRecipes/generate-recipe-page'));
const recipeRoutes = lazy(() => import('./components/Recipe_Section/recipeRoutes'));

const Loading = () => {
  return(
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '24px',
      fontWeight: 'bold'
    }}>
      Loading.....
    </div>
  )
}

const  App = () => {
  return (
    <Router>
      <AuthProvider>
        <ShopContextProvider>
          <Navbar />
          <Suspense fallback={<Loading />}/>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={
                <Suspense fallback={<Loading />}>
                  <Login />
                </Suspense>
            } />

            <Route path="/signup" element={
                <Suspense fallback={<Loading />}>
                  <Signup />
                </Suspense>
              } />
            
            {/* Protected routes */}
            <Route path="/cart" element={
              <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                  <Cart />
                </Suspense>
              </ProtectedRoute>
            } />


            <Route path="/incrediants" element={
              <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                  <Incrediants />
                </Suspense>
              </ProtectedRoute>
            } />

            <Route path="/social" element={
              <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                  <Social />
                </Suspense>
              </ProtectedRoute>
            } />


            <Route path="/recipes" element={
              <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                  <Recipes />
                </Suspense>
              </ProtectedRoute>
            } />


            <Route path="/shopping-list" element={
              <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                  <ShoppingList />
                </Suspense>
              </ProtectedRoute>
            } />

            <Route path="/generaterecipe" element={
              <ProtectedRoute>
                <Suspense fallback={<Loading />}>
                  <GenerateRecipePage />
                </Suspense>
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