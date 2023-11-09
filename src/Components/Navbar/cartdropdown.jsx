import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Link } from "react-router-dom";

function CartDropdown() {
    const { cart, removeFromCart } = useCart();

    // Calculate the total price
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-dropdown absolute top-full right-0 min-w-64 bg-white border border-gray-300 shadow-md rounded-lg p-4 mt-2">
            <div className="cart-items">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <p className="text-lg font-semibold">{item.title}</p>
                        <p className="text-gray-600">Price: £{item.price} x {item.quantity}</p>
                        <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-1 mt-2 rounded-md hover:bg-red-700">Remove</button>
                    </div>
                ))}
            </div>
            <h3 className="text-xl font-semibold mt-4">Total: £{totalPrice.toFixed(2)}</h3>
            <Link to="/cart" className="block text-blue-500 font-semibold mt-2 hover:underline">Go to Cart</Link>
        </div>
    );
}

export default CartDropdown;