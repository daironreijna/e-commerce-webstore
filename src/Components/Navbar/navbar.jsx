import React, { useState } from 'react';
import './navbar.css';
import logo from '../Assets/Logo 2.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom'; // Import Link component and useNavigate
import CartDropdown from './CartDropdown'; // Import the CartDropdown component

function Navbar() {
    const [menu, setMenu] = useState("shop");
    const [isCartOpen, setCartOpen] = useState(false);
    const navigate = useNavigate(); // Get the navigate function

    // Toggle the cart dropdown
    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    // Handle clicking on menu items
    const handleMenuClick = (menuItem) => {
        if (menuItem === "shop") {
            navigate('/'); // Navigate to the shop page
        }
        setMenu(menuItem);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-menu">
                <li onClick={() => handleMenuClick("shop")}>
                    <a href={"/"} >Shop</a>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => handleMenuClick("mens")}>
                    <a href="#mens">Men</a>
                </li>
                <li onClick={() => handleMenuClick("womens")}>
                    <a href="#womens">Women</a>
                </li>
                <li onClick={() => handleMenuClick("jewelry")}>
                    <a href="#jewelry">Jewelry</a>
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
