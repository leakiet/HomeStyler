import React from 'react'

function ProductItem() {
    return (
        <>
        <div className="card" style={{ width: '18rem' }}>
            <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/317/606/products/ban-tra-sofa-elip-mat-da-trang-chan-inox-ma-pvd-vang-cao-cap-bt22e-1.jpg?v=1721047398047
            " class="card-img-top" alt="Cart item"/>
                <div class="card-body">
                    <h5 class="card-title">Product title</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Price</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">View Details</a>
                    <a href="#" class="card-link">Add to Card</a>
                </div>
        </div>
        </>
    )
}

export default ProductItem

