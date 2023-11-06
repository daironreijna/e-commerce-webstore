import React, { useEffect, useState } from 'react';

function JeweleryProducts() {
    const [jewelproducts, setJewelProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then((res) => res.json())
            .then((data) => setJewelProducts(data));
    }, []);

    return (
        <div>
            <h2>Jewelry Products</h2>
            <div className="product-list">
                {jewelproducts.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default JeweleryProducts;
