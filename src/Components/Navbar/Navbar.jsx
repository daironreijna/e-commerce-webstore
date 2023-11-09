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
        <div className='navbar flex bg-sky-950 justify-between ' >
            <div className="">
                <Link to={"/"}> <img className="rounded-full m-10 w-1/3 sm:w-1/4" src={logo} alt="DAAK Logo" /></Link>
            </div>
            <ul className="navItems flex columns-3 text-white text-lg font-medium text-md center ">
                <a className="hover:underline hover:text-red-500 " href={'/#mens'}> Mens</a>
                <a className="hover:underline hover:text-red-500 px-5" href={'/#womens'}> Womens</a>
                <a className="hover:underline hover:text-red-500 " href={'/#jewelry'}> Jewelry</a>
            </ul>
            <div className="gap-5 columns-2">
                <Link to='/login'><button
                    className=
                        " hover:animate-pulse bg-white text-gray-700 py-1 px-2 rounded-md text-sm font-medium ">
                    Login</button></Link>
                {/* Add an icon to toggle the cart */}
                <img
                    src={cart_icon}
                    alt=""
                    onClick={toggleCart}
                    style={{ cursor: 'pointer' }}
                    className="w-8 hover:animate-bounce bg-white rounded-md"
                />

                {/* <div className="nav-cart-count">{getTotalCartItems}</div> */}


                {/* Display the cart dropdown when it's open */}
                {isCartOpen && <CartDropdown />}
            </div>
        </div>
    );
}

export default Navbar;
