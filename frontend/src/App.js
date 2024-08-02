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
import CheeseCake from './components/sanjal/CheeseCake';
import { ShopContextProvider } from "./components/sameer/context/shop-context";
import ChocolateCake from './components/sanjal/ChocolateCake';
import Soup from './components/sanjal/Soup'
import Salads from './components/sanjal/Salads';
import Pizza from './components/sanjal/Pizza';
import Sushi from './components/sanjal/Sushi';
import Pastasss from './components/sanjal/Pastasss';
import Banana from './components/sanjal/Banana';
import Waffels from './components/sanjal/Waffels';


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
          <Route path="/ChocolateCake" element={<ChocolateCake />} />
          <Route path="/Soup" element={<Soup />} />
          <Route path="/Salads" element={<Salads />} />
          <Route path="/Pizza" element={<Pizza />} />
          <Route path="/Sushi" element={<Sushi />} />
          <Route path="/Pastasss" element={<Pastasss />} />
          <Route path="/Banana" element={<Banana />} />
          <Route path="/Waffels" element={<Waffels />} />
          {/* <Route path="/Pastasss" element={<Pastasss />} /> */}
        </Routes>
      
    </BrowserRouter>
    </ShopContextProvider>
    
  );
}

export default App;
