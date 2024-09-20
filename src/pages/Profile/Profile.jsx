import React, { useContext, useEffect } from 'react';
import "./Profile.css"
import { DataContext } from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';
function Profile(props) {
    const { wishList, userInfo,setWishList } = useContext(DataContext)
    const navigate = useNavigate();
    useEffect(() => {
        if (!userInfo) {
            navigate("/")
        }
    })
    const removeWishlist = (product) => {
          setWishList((prevWishlist) => {
            const isProductInWishlist = prevWishlist.some(item => item.id === product.id);
            
            if (isProductInWishlist) {
              return prevWishlist.filter(item => item.id !== product.id);
            } else {
              return [...prevWishlist, product];
            }
          });
        } 
    return (
        <div class="row">
            <div class="row container-profile">
                <div class="col-md-4 text-center">
                    <img src={userInfo?.avatar} class="rounded-circle" alt="Profile Image" width="100" />
                    <h3>{userInfo?.fullname}</h3>
                    <p>{userInfo?.email}</p>
                </div>
                <div class="col-md-8">
                    <div class="row">
                        {wishList && wishList.length > 0 && wishList.map((item, index) => {
                            return (
                                <div class="col-md-6">
                                    <div class="card bg-light text-dark mb-3">
                                        <div class="card-body">
                                            <img className='wish-image' src={item.image[0]} />
                                            <h5 class="card-title">{item.name}</h5>
                                            <button className='btn btn-info me-2'
                                            onClick={()=>navigate(`/products/${item.id}`)}>Detail</button>
                                             <button className='btn btn-danger ms-2'
                                            onClick={()=>removeWishlist(item)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;