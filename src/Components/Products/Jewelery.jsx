import React, { useEffect, useState } from 'react';
import CartPage from "../../contexts/Cart/Cart.jsx";
import { useCart } from "../../contexts/CartContext.jsx";
import './Item.css';

function JewelryProducts() {
    const [jewelproducts, setJewelProducts] = useState([]);
    const { cart, addToCart } = useCart();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then((res) => res.json())
            .then((data) => setJewelProducts(data));
    }, []);

    return (
        <div className="products-container">
            <h2 className="text-2xl font-semibold text-center mb-4 text-black">Jewelry Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                {jewelproducts.map((product) => (
                    <div key={product.id} className="bg-white shadow-md p-4 rounded-lg">
                        <img src={product.image} alt={product.title} className=" max-h-40" />
                        <h3 className="text-lg font-semibold mt-2 text-gray-700">{product.title}</h3>
                        <p className="text-gray-600">Price: £{product.price}</p>
                        <p className="text-gray-700">{product.description}</p>
                        <p className="text-black">{product.rating.rate} / 5 <br/> {product.rating.count} people liked this</p>
                        <button onClick={() => addToCart(product)} className="hover:animate-bounce bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JewelryProducts;
