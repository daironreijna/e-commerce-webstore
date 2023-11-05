import React, { useEffect, useState } from 'react';

function MenProducts() {
    const [mensproducts, setMensProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
            .then((res) => res.json())
            .then((data) => setMensProducts(data));
    }, []);

    return (
        <div>
            <h2>Men's Clothing Products</h2>
            <div className="product-list">
                {mensproducts.map((product) => (
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

export default MenProducts;
