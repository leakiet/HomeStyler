import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../ProductItem';
import Banner from '../../../components/Banner/Banner';
import FilterList from '../FilterList/FilterList';

function ProductInCategory({ addCart, value, onSearch }) {
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
                setFilterProducts(products.filter(product => (
                    product.cate1 && product.cate1.toLowerCase() === slug
                )));
            } catch (err) {
                console.log('Error fetching products:', err);
            }
        };
        fetchData();
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
