﻿import react from 'react'
import MenProducts from '../../Components/Products/mens.jsx'
import WomenProducts from "../../Components/Products/womens.jsx";
import JeweleryProducts from "../../Components/Products/jewelery.jsx";
export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Amazing Shop</h1>
            </div>

            <div className="products">
               <h1> For Men</h1>
                <MenProducts/>
                <h1> For Women</h1>
                <WomenProducts/>
                <h1> For Him and Her</h1>
                <JeweleryProducts/>
            </div>
        </div>
    )
};