import React, { useEffect, useState } from 'react';
import CartPage from "../../Pages/Cart/cart.jsx";
function MenProducts() {
    const [mensproducts, setMensProducts] = useState([]);
    const [cart, setCart] = useState([])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
            .then((res) => res.json())
            .then((data) => setMensProducts(data));
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };
    
    return (
        <div>
            <h2>Men's Clothing Products</h2>
            <div className="product-list">
                {mensproducts.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <p>{product.description}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <CartPage cartItems={cart} /> {/* Render the CartPage component */}
        </div>
    );
}

export default MenProducts;
