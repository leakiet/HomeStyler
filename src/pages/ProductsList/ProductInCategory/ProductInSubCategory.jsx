import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../ProductItem';
import Banner from '../../../components/Banner/Banner';

function ProductInSubCategory({ addCart }) {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    const params = useParams();
    const slug = params.slug;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/products.json');
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                console.log('Error fetching products:', err);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            setFilterProducts(
                products.filter(product => (
                    product.cate2 && product.cate2.toLowerCase() === slug
                ))
            );
        }
    }, [slug, products]);

    

    return (
        <>
            <div>
                <Banner />
            </div>
            <div className='product-list-container'>
                <div className='search'></div>
                <div className="product">
                    <h3>Products in {slug}</h3>
                    <div className="product-item">
                        {filterProducts.length > 0 ? (
                            filterProducts.map(product => (
                                <ProductItem key={product.id} product={product} addCart={addCart} />
                            ))
                        ) : (
                            <p>No products found in this category.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductInSubCategory;
