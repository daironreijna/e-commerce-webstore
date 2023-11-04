import React, { createContext, useState, useEffect } from 'react';

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    // products state
    const [products, setProducts] = useState([]);
    // fetch products
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://65459ed2fe036a2fa9549580.mockapi.io/api/v1/ShopProducts');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
