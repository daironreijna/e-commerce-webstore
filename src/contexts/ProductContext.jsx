import React, { createContext, useState, useEffect } from 'react';

// Create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // Products state
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://65459ed2fe036a2fa9549580.mockapi.io/api/v1/ShopProducts', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }, // Make sure the header keys are correctly cased
        });

        if (response.ok) {
          const data = await response.json();
          setProducts(data); // Set the products with the fetched data
        } else {
          // Handle HTTP error
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        // Handle fetch error
        console.error('Fetch error:', error.message);
      }
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
