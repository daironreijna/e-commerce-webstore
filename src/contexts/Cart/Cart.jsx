import React, { useState } from 'react';
import {useCart} from "../CartContext.jsx";
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
            <div className=" bg-gray-100 p-4">

                <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-lg p-4 md:flex space-x-4">
                    <div className="md:w-2/3">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Shopping Cart</h2>
                        <div className="cart-items">
                            {cart.map((item) => (
                                <div key={item.id} className="flex border-b border-gray-300 pb-4 mb-4">
                                    <div className="w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 ml-4">
                                        <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
                                        <p className="text-gray-600">Price: £{item.price}</p>
                                        <div className="quantity-control mt-2 text-gray-700">
                                            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md">-</button>
                                            <p className="mx-2">{item.quantity}</p>
                                            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md">+</button>
                                        </div>
                                        <p className="text-gray-600 mt-2">Subtotal: £{(item.price * item.quantity).toFixed(2)}</p>
                                        <button className="remove-item text-red-500 mt-2" onClick={() => handleRemoveFromCart(item.id)}>Remove Item</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <div className="totals-column">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-700">DELIVERY DETAILS</h2>
                            <div className="delivery-options space-y-2 text-gray-700">
                                {deliveryOptions.map((option) => (
                                    <label key={option.id} className="flex items-center ">
                                        <input
                                            type="radio"
                                            name="delivery-option"
                                            value={option.id}
                                            checked={selectedDeliveryOption === option.id}
                                            onChange={handleDeliveryOptionChange}
                                            className="mr-2"
                                        />
                                        {option.label} Price £{option.price.toFixed(2)}
                                    </label>
                                ))}
                            </div>

                            <h2 className="text-2xl font-semibold mt-4 text-gray-700">CART TOTAL VALUE</h2>
                            <p className="text-gray-700">DELIVERY COST: £{deliveryCost.toFixed(2)}</p>
                            <p className="text-gray-700">TOTAL COST: £{totalCost.toFixed(2)}</p>

                            <div className="checkout-button mt-4">
                                <button disabled className="px-4 py-2 bg-gray-400 text-gray-800 rounded-md cursor-not-allowed">Checkout</button>
                            </div>
                            <div>
                                <Link to="/" className="block text-blue-500 font-semibold mt-2 hover:underline">Back to Shop</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;

