import react from 'react'
import MenProducts from '../../Components/Products/mens.jsx'
import WomenProducts from "../../Components/Products/womens.jsx";
import JeweleryProducts from "../../Components/Products/jewelery.jsx";
import CartPage from "../../Pages/Cart/cart.jsx";
import React from "react";
import cart from "../../Pages/Cart/cart.jsx";
import {Link} from "react-router-dom";
import Hero from "../../Components/Hero/hero";
import './shop.css'
export const Shop = () => {
    return (
        <div className="shop">
            <Hero />
            <div className="products">
                <h1 className="section-title" id="mens">
                    
                </h1>
                <MenProducts />
                <h1 className="section-title" id="womens">
                    
                </h1>
                <WomenProducts />
                <h1 className="section-title" id="jewelry">
                    
                </h1>
                <JeweleryProducts />
              
            </div>
        </div>
    );
};