import React from 'react';
import { useCart } from '../../contexts/CartContext';

function CartDropdown() {
    const { cart, removeFromCart } = useCart();

    // Calculate the total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <p>{item.title}</p><br/>
                        <p>Price: ${item.price} x {item.quantity}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
}

export default CartDropdown;
