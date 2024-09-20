import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ProductItem.css'

function ProductItem({ product, addCart }) {
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/products/${id}`);
    }
    
    return (
        <>
        <div className="card" style={{ width: '18rem' }}>
            <img src={product.image[0]} alt={product.name} className="card-img-top" height="300px" />
                <div className="card-body card-body-custom">
                    <h5 className="card-title">{product.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">${product.price}</li>
                </ul>
                <div className="card-body card-buttons">
                    <a href=''>
                    <button onClick={() => handleProductClick(product.id)} className="btn btn-secondary">View Details</button>
                    </a>
                    <button onClick={() =>addCart(product)} className="btn btn-success">Add to Card</button>
                </div>
        </div>
        </>
    )
}

export default ProductItem

