import React from 'react'
import ProductItem from './ProductItem'
import './ProductList.css'
import Banner from '../../components/Banner/Banner'
import FilterList from './FilterList/FilterList'

function ProductsList() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8]
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
          <div className="product-item">
            {array.map(e => (
              <ProductItem key={e} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsList
