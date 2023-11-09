import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
/* Import pages */
import CartPage from "/src/contexts/Cart/Cart.jsx";
import { Shop } from "./Pages/Shop/Shop.jsx";/* Import components */
import { CartProvider } from './contexts/CartContext.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { Login } from './Pages/LoginSignUp.jsx';

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
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                    <Footer />
                </Router>
            </CartProvider>
        </div>
    );
}




