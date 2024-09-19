import React, { useEffect, useState } from 'react'
import './RelatedProducts.css'
import Slider from 'react-slick';
import ProductItem from '../../ProductsList/ProductItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function RelatedProducts() {
    const array = [1, 2, 3, 4]

    const CustomPrevArrow = (props) => (
        <div {...props} className="custom-arrows1 custom-prev-arrows1" >
         <i class="bi bi-arrow-left"></i>
        </div>
    );

    const CustomNextArrow = (props) => (
        <div {...props} className="custom-arrows1 custom-next-arrows1">
         <i class="bi bi-arrow-right"></i>
        </div>
    );

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className='related-products-container'>
            <h3>Related Product</h3>
            <hr />
            <div className='relatedproducts-items-container'>
                <Slider {...settings} className='relatedproducts-items'>
                    {array.map(e => (
                        <div className='relatedproducts-items-show'>
                            <ProductItem key={e} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    )
}

export default RelatedProducts
