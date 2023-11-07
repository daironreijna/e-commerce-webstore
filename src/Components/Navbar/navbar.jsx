import React, { useState } from 'react';
import './navbar.css';
import logo from '../Assets/Logo 2.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useLocation } from 'react-router-dom'; // Import Link component and useLocation
import CartDropdown from './CartDropdown'; // Import the CartDropdown component

function Navbar() {
    const [menu, setMenu] = useState("shop");
    const [isCartOpen, setCartOpen] = useState(false);
    const location = useLocation(); // Get the current location

    // Toggle the cart dropdown
    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            // Check if not on the homepage and redirect to the homepage first
            if (location.pathname !== '/') {
                window.location.href = '/#'; // Redirect to homepage
            }
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
               <Link to={"/"}> <img src={logo} alt="" /></Link>
            </div>
            <ul className="nav-menu">
                <a href={'/#mens'}> Mens</a>
                <a href={'/#womens'}> Womens</a>
                <a href={'/#jewelry'}> Jewelry</a>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                {/* Add an icon to toggle the cart */}
                <img
                    src={cart_icon}
                    alt=""
                    onClick={toggleCart}
                    style={{ cursor: 'pointer' }}
                />
              

                {/* Display the cart dropdown when it's open */}
                {isCartOpen && <CartDropdown />}
            </div>
        </div>
    );
}

export default Navbar;
