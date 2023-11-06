import React, { useEffect, useState } from 'react';
import CartPage from "../../Pages/Cart/cart.jsx";
import {useCart} from "../../contexts/CartContext.jsx";
function WomenProducts() {
    const [womensproducts, setWomensproducts] = useState([]);
    const { cart, addToCart } = useCart();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
            .then((res) => res.json())
            .then((data) => setWomensproducts(data));
    }, []);
    
    return (
        <div>
            <h2>Women's Clothing Products</h2>
            <div className="product-list">
                {womensproducts.map((product) => (
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

export default WomenProducts;
