import React from 'react'
import ProductItem from './ProductItem'
import './ProductList.css'
import Banner from '../../components/Banner/Banner'
import FilterList from './FilterList/FilterList'

function ProductsList({ products, addCart }) {

  return (
    <>
      <div>
        <Banner />
      </div>
      <div className='product-list-container'>
        <div className='search'>
          <FilterList />
        </div>


        <div className="product">
          <h3>All Products</h3>
          <div className="product-item">
            {products.map(product => (
              <ProductItem key={product.id} product={product}  addCart={addCart}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsList
