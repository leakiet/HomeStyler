import React from 'react'
import './ProductDetails.css'
import RelatedProducts from './RelatedProducts/RelatedProducts'

function ProductsDetails() {

  return (
    <div className='product-deatails-wrapper'>
      <div className="details">
        <div className="details-left">
        <div className="details-img">
            <img className="details-main-img" src='https://sofakimphu.com/wp-content/uploads/2023/02/z4140108879592_87731ad5e8cec919995831c1002d820a.jpg' alt="Product" />
          </div>
          <div className="details-img-list">
            <img src="https://sofakimphu.com/wp-content/uploads/2023/02/z4140108879592_87731ad5e8cec919995831c1002d820a.jpg"
              alt="" />
            <img src="https://sofakimphu.com/wp-content/uploads/2023/02/z4140108879592_87731ad5e8cec919995831c1002d820a.jpg"
              alt="" />
            <img src="https://sofakimphu.com/wp-content/uploads/2023/02/z4140108879592_87731ad5e8cec919995831c1002d820a.jpg"
              alt="" />
          </div>
        </div>

        <div className="details-right">
          <h1>Title</h1>
          <div className="details-right-star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <p>(98)</p>
          </div>
          <div className="details-right-price">
            <div className="details-right-price-old">400</div>
            <div className="details-right-price-new">350</div>
          </div>
          <div className="details-right-description">
            This is details
          </div>
          <button>ADD TO CART</button>
          <p className="details-right-category"><span>Category: </span>Category</p>
          <p className="details-right-category"><span>Type: </span>Type</p>
          <p className="details-right-category"><span>Color: </span>Color</p>
          <p className="details-right-category"><span>Dimension: </span>Dimension</p>
        </div>
      </div>

      <RelatedProducts />
    </div>
  )
}

export default ProductsDetails
