import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
/*import pages*/
import Cart from './Pages/Cart/cart.jsx'
import Navbar from './Components/Navbar/navbar.jsx'
import { Shop } from './Pages/Shop/shop.jsx'
/*import components*/
import { CartProvider } from "./contexts/CartContext.jsx";

/* Import CSS */
import './App.css'

import Hero from "./Components/Hero/hero"

export default function App() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className='overflow-hidden'>
        <Router>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Shop />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </CartProvider>
        </Router>

      </div>

    </div>
  );
};