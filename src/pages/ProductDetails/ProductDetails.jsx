import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import RelatedProducts from './RelatedProducts/RelatedProducts'
import { useParams } from 'react-router-dom';

function ProductsDetails({ addCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataJsons = await fetch('../data/products.json');
        const data = await dataJsons.json();

        const selectedProduct = data.find((item) => item.id == id);
        setProduct(selectedProduct);

        const relatedProductsData = data.filter((item) => item.cate2 === selectedProduct.cate2);
        setRelatedProducts(relatedProductsData);

        setSelectedImage(selectedProduct.image[0]);
      } catch (error) {
        console.log('error reading json', error);
      }
    };
    fetchData();
  }, [id]);
  if (!product) { return (<div className="loadingPage"></div>) }

 const handleImageClick = (image) => { setSelectedImage(image) }


  return (
    <div className='product-deatails-wrapper'>
      <div className="details">
        <div className="details-left">
          <div className="details-img">
            <img className="details-main-img" src={selectedImage} alt="Product" />
          </div>
          <div className="details-img-list">
            {product.image.map((i, index) => (
              <img key={index} src={i} alt="image" onClick={() => handleImageClick(i)} />
            ))}
          </div>
        </div>

        <div className="details-right">
          <h1>{product.name}</h1>
          <div className="details-right-star">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <p>(98)</p>
          </div>
          <div className="details-right-price">
            <div className="details-right-price-new">${product.price}</div>
          </div>
          <div className="details-right-description">
            {product.description}
          </div>
          <button onClick={() => addCart(product)}>ADD TO CART</button>
          <p className="details-right-category"><span>Category: </span>{product.cate1}</p>
          <p className="details-right-category"><span>Sub-Category: </span>{product.cate2}</p>
          <p className="details-right-category"><span>Color: </span>Color</p>
          <p className="details-right-category"><span>Dimension: </span>Dimension</p>
        </div>
      </div>

      <RelatedProducts addCart={addCart} relatedProducts={relatedProducts}/>
    </div >
  )
}

export default ProductsDetails
