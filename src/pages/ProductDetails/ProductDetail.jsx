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
        <div className="container product-detail-container">
            {proDetail != null && 
                <div className="row">
                <div className="col-md-6 product-images-column">
                    <img src={proDetail?.image[0]} className="main-product-image" alt="Hình ảnh sản phẩm chính" />
                    <div className="related-images">
                        {proDetail?.image.map((item, index) => {
                            if (index != 0) {
                                return (
                                    <img src={item} alt="Hình ảnh chi tiết 1" />
                                );
                            }

                        })}
                    </div>
                    <div className="product-feedback">
                        <h5>Phản Hồi Khách Hàng</h5>
                        {proDetail?.reviews && proDetail?.reviews.map((item, index) => {
                            return (
                                <div className="feedback-item">
                                    <h6>{item.userName}</h6>
                                    <StarRating rating={item.stars} />
                                    <p>{item.comment}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="col-md-6 product-info-column">
                    <h2>{proDetail?.name}</h2>
                    <p>{proDetail?.description}</p>
                    <div className="product-price">{proDetail?.price}$</div>
                    <div className="product-rating">
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