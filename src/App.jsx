import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* Import pages */
import Cart from './Pages/Cart/cart.jsx';
import {Shop} from "./Pages/Shop/shop.jsx";/* Import components */
import { CartProvider } from './contexts/CartContext.jsx';
import Navbar from './Components/Navbar/navbar.jsx';

/* Import CSS */
import './App.css';
export default function App() {
    return (
        <div className="overflow-hidden">
            <CartProvider>
                <Router>
                    <Navbar /> {/* Place Navbar outside of the Routes */}
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Router>
            </CartProvider>
        </div>
    );
}

