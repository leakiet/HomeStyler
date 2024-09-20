import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../ProductItem';
import Banner from '../../../components/Banner/Banner';
import FilterList from '../FilterList/FilterList';

function ProductInCategory({ products, addCart, value, onSearch }) {
    const [filterProducts, setFilterProducts] = useState([]);

    const params = useParams();
    const slug = params.slug;

    useEffect(() => {
        if (products.length > 0) {
            setFilterProducts(
                products.filter(product => {
                    return product.cate2 && product.cate2.toLowerCase().replace(/\s/g, '-') === slug ;
                })
            );
        }
    }, [slug, products]);

    return (
        <>
            <div>
        <Banner />
      </div>
      <div className='product-list-container'>
        <div className='search'>
        <FilterList value={value} onSearch={onSearch} />
        </div>
        <div className="product">
            <h3>Products in {slug}</h3>
            <div className="product-item">
                {filterProducts.length > 0 && filterProducts.map(product => (
                    <ProductItem key={product.id} product={product} addCart={addCart} />
                ))}
            </div>
            </div>
        </div>

        </>
    );
}

export default ProductInCategory;
