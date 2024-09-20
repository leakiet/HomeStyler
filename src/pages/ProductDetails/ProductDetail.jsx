import React, { useContext, useEffect, useState } from 'react';
import "./ProductDetails.css"
import { DataContext } from '../../context/DataContext';
import { useNavigate, useParams } from 'react-router-dom';
import StarRating from './StarRating';

function ProductDetail(props) {
    const [proDetail, setProDetail] = useState(null)
    const { idPro } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        fetch("/data/products.json")
            .then(res => res.json())
            .then(data => {
                let result = data.find(item => item.id == idPro);
                if (result) {
                    setProDetail(result);
                } else {
                    navigate("/products")
                }

            })
            .catch(err => console.log(err))
    }, [idPro])
console.log("proDetail: ",proDetail);

    return (
        <div class="container product-detail-container">
            {proDetail != null && 
                <div class="row">
                <div class="col-md-6 product-images-column">
                    <img src={proDetail?.image[0]} class="main-product-image" alt="Hình ảnh sản phẩm chính" />
                    <div class="related-images">
                        {proDetail?.image.map((item, index) => {
                            if (index != 0) {
                                return (
                                    <img src={item} alt="Hình ảnh chi tiết 1" />
                                );
                            }

                        })}
                    </div>
                    <div class="product-feedback">
                        <h5>Phản Hồi Khách Hàng</h5>
                        {proDetail?.reviews && proDetail?.reviews.map((item, index) => {
                            return (
                                <div class="feedback-item">
                                    <h6>{item.userName}</h6>
                                    <StarRating rating={item.stars} />
                                    <p>{item.comment}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div class="col-md-6 product-info-column">
                    <h2>{proDetail?.name}</h2>
                    <p>{proDetail?.description}</p>
                    <div class="product-price">{proDetail?.price}$</div>
                    <div class="product-rating">
                    <StarRating rating={proDetail?.rating.averageStars} />
                        <span>({proDetail?.rating.averageStars} star)</span>
                    </div>
                </div>
            </div>
            }
        
        </div>

    );
}

export default ProductDetail;