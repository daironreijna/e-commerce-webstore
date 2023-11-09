import React, { useState } from 'react';
import { useCart } from "../CartContext.jsx";
import { Link } from "react-router-dom";
import './Cart.css';

function CartPage() {
    const { cart, removeFromCart, updateCartItemQuantity } = useCart();

    // Delivery options and prices
    const deliveryOptions = [
        { id: 'click-collect', label: 'Click & Collect', price: 0 },
        { id: 'standard', label: 'Standard Delivery', price: 3.5 },
        { id: 'express', label: 'Express Delivery', price: 6 },
    ];

    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState('click-collect');

    const handleDeliveryOptionChange = (event) => {
        setSelectedDeliveryOption(event.target.value);
    };

    // Calculate the total price and total quantity
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    // Calculate delivery cost
    const selectedDelivery = deliveryOptions.find((option) => option.id === selectedDeliveryOption);
    const deliveryCost = selectedDelivery ? selectedDelivery.price : 0;

    // Calculate total cost
    const totalCost = totalPrice + deliveryCost;

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    const handleQuantityChange = (productId, quantity) => {
        updateCartItemQuantity(productId, quantity);
    };

    return (
        <div className="cart-page">


            <div className="cart-items">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        {/* Image of Item */}
                        <img src={item.image} alt={item.title} />
                        {/* Title */}
                        <p className="item-title">{item.title}</p>
                        {/* Description */}
                        <p className="item-description">{item.description}</p>
                        {/* Price and Quantity */}
                        <div className="item-price-quantity">
                            <p>Price £{item.price}</p>
                            <div className="quantity-control">
                                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                <p>{item.quantity}</p>
                                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                            </div>
                        </div>
                        {/* Subtotal */}
                        <p className="item-subtotal">Subtotal £{(item.price * item.quantity).toFixed(2)}</p>
                        {/* Remove Item */}
                        <button className="remove-item" onClick={() => handleRemoveFromCart(item.id)}>Remove Item</button>
                    </div>
                ))}
            </div>

            <div className="totals-column">
                <h2>DELIVERY DETAILS</h2>
                <div className="delivery-options">
                    {deliveryOptions.map((option) => (
                        <label key={option.id}>
                            <input
                                type="radio"
                                name="delivery-option"
                                value={option.id}
                                checked={selectedDeliveryOption === option.id}
                                onChange={handleDeliveryOptionChange}
                            />
                            {option.label} Price £{option.price.toFixed(2)}
                        </label>
                    ))}
                </div>

                <h2>CART TOTAL VALUE</h2>
                <p>DELIVERY COST: £{deliveryCost.toFixed(2)}</p>
                <p>TOTAL COST: £{totalCost.toFixed(2)}</p>

                <div className="checkout-button">
                    <button disabled>Checkout</button>
                </div>
                <div>
                    <Link to="/">Back to Shop</Link>
                </div>
            </div>

        </div>
    );
}

export default CartPage;
