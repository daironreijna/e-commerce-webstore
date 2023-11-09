import React from "react";

import MenProducts from '../../Components/Products/Mens.jsx';
import WomenProducts from "../../Components/Products/Womens.jsx";
import JewelryProducts from '../../Components/Products/Jewelery.jsx';
// import { CartPage } from "../../Pages/Cart/Cart.jsx";
// import { Cart } from './contexts/Cart/Cart.jsx';
// import { Link } from "react-router-dom";
import Hero from "../../Components/Hero/Hero.jsx";
import "./Shop.css";

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
                <JewelryProducts />

            </div>
        </div>
    );
};