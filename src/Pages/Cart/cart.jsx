import React from 'react';
import { useCart} from "../../contexts/CartContext.jsx";// Import useCart hook

function CartPage() {
    const { cart, removeFromCart } = useCart(); // Use the useCart hook

    // Calculate the total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
}

export default CartPage;