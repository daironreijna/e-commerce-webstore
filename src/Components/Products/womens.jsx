import React, { useEffect, useState } from 'react';

function WomenProducts() {
    const [womensproducts, setWomensproducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
            .then((res) => res.json())
            .then((data) => setWomensproducts(data));
    }, []);

    return (
        <div>
            <h2>Women's Clothing Products</h2>
            <div className="product-list">
                {womensproducts.map((product) => (
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

export default WomenProducts;
