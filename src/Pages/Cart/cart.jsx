import React from 'react';
import { useCart } from "../../contexts/CartContext.jsx";
import {Link} from "react-router-dom";

function CartPage() {
    const { cart, removeFromCart, updateCartItemQuantity } = useCart();

    // Calculate the total price and total quantity
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    const handleQuantityChange = (productId, quantity) => {
        updateCartItemQuantity(productId, quantity);
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                        <div className="quantity-control">
                            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                        </div>
                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <h3>Total Quantity: {totalQuantity}</h3>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <div>
                <Link to="/">Back to Shop</Link>
            </div>
        </div>
        
    );
}

export default CartPage;
