import React, { useState } from 'react';
import './navbar.css';
import logo from '../Assets/Logo 2.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom'; // Import Link component
import CartDropdown from './CartDropdown'; // Import the CartDropdown component

function Navbar() {
    const [menu, setMenu] = useState("shop");
    const [isCartOpen, setCartOpen] = useState(false);

    // Toggle the cart dropdown
    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link to="/">Shop</Link> {/* Use Link component for Shop */}
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li>
                    <Link to="/#mens">Men</Link> {/* Use Link component for Men section */}
                </li>
                <li>
                    <Link to="/#womens">Women</Link> {/* Use Link component for Women section */}
                </li>
                <li>
                    <Link to="/#jewelry">Jewelry</Link> {/* Use Link component for Jewelry section */}
                </li>
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
                <Link to="/cart">Go to Cart</Link>

                {/* Display the cart dropdown when it's open */}
                {isCartOpen && <CartDropdown />}
            </div>
        </div>
    );
}

export default Navbar;
