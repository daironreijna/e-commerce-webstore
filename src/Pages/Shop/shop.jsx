
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
            <div className="shopTitle">
                <h1>Amazing Shop</h1>
            </div>
            <Hero/>
            <div className="products">
               <h1> For Men</h1>
                <MenProducts/>
                <h1> For Women</h1>
                <WomenProducts/>
                <h1> For Him and Her</h1>
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