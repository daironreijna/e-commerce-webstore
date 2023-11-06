import React, { useEffect, useState } from 'react';
import {useCart} from "../../contexts/CartContext.jsx";
import CartPage from "../../Pages/Cart/cart.jsx";
function JeweleryProducts() {
    const [jewelproducts, setJewelProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then((res) => res.json())
            .then((data) => setJewelProducts(data));
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };
    
    return (
        <div>
            <h2>Jewelry Products</h2>
            <div className="product-list">
                {jewelproducts.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <p>{product.description}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JeweleryProducts;
