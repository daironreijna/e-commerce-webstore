import React, { useState } from 'react';

function Cart() {
    // Sample cart items (you can replace these with your data)
    const [cartItems, setCartItems] = useState([
        { id: 1, title: 'Product 1', price: 19.99 },
        { id: 2, title: 'Product 2', price: 24.99 },
    ]);

    // Calculate the total price of items in the cart
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className="cart-container">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={`product${item.id}.jpg`} alt={item.title} />
                        <div className="cart-item-info">
                            <p className="cart-item-title">{item.title}</p>
                            <p className="cart-item-price">${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                <p>Total: ${calculateTotal()}</p>
                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
