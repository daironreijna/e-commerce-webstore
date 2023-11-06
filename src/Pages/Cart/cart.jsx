import React from 'react';

function CartPage({ cartItems }) {
    // Calculate the total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
}

export default CartPage;
