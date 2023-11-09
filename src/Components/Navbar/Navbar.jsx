import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useLocation } from 'react-router-dom'; // Import Link component and useLocation
import CartDropdown from './CartDropDown'; // Import the CartDropdown component

function Navbar() {
    const [menu, setMenu] = useState("mens");
    const [isCartOpen, setCartOpen] = useState(false);
    const location = useLocation(); // Get the current location

    // const {getTotalCartItems}= useContext(CartContext);

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
        <div className='navbar bg-sky-950' >
            <div className="nav-logo">
                <Link to={"/"}> <img className="rounded-full" src={logo} alt="" /></Link>
            </div>
            <p className="nav-logo-name"><Link to={"/"}>Smart Shopper</Link></p>
            <ul className="nav-menu">
                {/* <li onClick={()=>{setMenu(mens)}}>Mens{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu(women)}}>Women{menu==="women"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu(jewelry)}}>Jewelry{menu==="jewelry"?<hr/>:<></>}</li> */}
                <a href={'/#mens'}> Mens<hr /></a>
                <a href={'/#womens'}> Womens<hr /></a>
                <a href={'/#jewelry'}> Jewelry<hr /></a>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                {/* Add an icon to toggle the cart */}
                <img src={cart_icon}
                    alt=""
                    onClick={toggleCart}
                    style={{ cursor: 'pointer' }}
                />

                {/* <div className="nav-cart-count">{getTotalCartItems}</div> */}


                {/* Display the cart dropdown when it's open */}
                {isCartOpen && <CartDropdown />}
            </div>
        </div>
    );
}

export default Navbar;
