import react from 'react'
import MenProducts from '../../Components/Products/mens.jsx'
import WomenProducts from "../../Components/Products/womens.jsx";
import JeweleryProducts from "../../Components/Products/jewelery.jsx";
import CartPage from "../../Pages/Cart/cart.jsx";
import React from "react";
import cart from "../../Pages/Cart/cart.jsx";
import {Link} from "react-router-dom";
import Hero from "../../Components/Hero/hero";
export const Shop = () => {
    return (
       <div className="shop">
            <Hero/>
            <div className="products">
                <h1 id="mens">For Men</h1> {/* Add an id for the Men section */}
                <MenProducts/>
                <h1 id="womens">For Women</h1> {/* Add an id for the Women section */}
                <WomenProducts/>
                <h1 id="jewelry">For Him and Her</h1> {/* Add an id for the Jewelry section */}
                <JeweleryProducts/>
                <CartPage cartItems={cart} /> {/* Render the CartPage component */}
                {/*link to cart page*/}
                
            </div>
            <div>
                <Link to="/cart">Go to Cart</Link>
            </div>
        </div>
            
    )
};