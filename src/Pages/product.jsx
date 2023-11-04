import React, { useContext } from 'react';
// import product context
import { ProductContext } from '../contexts/ProductContext';
// import components
import Product from '../components/Assets/all_products.jsx';

const Home = () => {
    // get products from product context
    const { products } = useContext(ProductContext);

    // get only men's and women's categories
    // Assuming the categories in your data are 'men' and 'women'
    const filteredProducts = products.filter((item) => {
        return item.category === 'men' || item.category === 'women';
    });

    return (
        <div>
            <Hero />
            <section className='py-16'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]'>
                        {filteredProducts.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
