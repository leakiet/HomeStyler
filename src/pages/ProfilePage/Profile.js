import { useState, useEffect, useContext } from 'react';
import './Profile.css'
import { DataContext } from "../../context/DataContext";
function Profile() {
    const savedUser = JSON.parse(localStorage.getItem('user-data')) || [];
    const currentUser = JSON.parse(localStorage.getItem('username'));
    const { favoriteStyle } = useContext(DataContext);
    // Find the user in the array based on the username
    const currentUserInfo = savedUser.find(user => user.username === currentUser.loginUsername);
    const [userInfo, setUserInfo] = useState(currentUserInfo);
    //display a current purchase items (which are saved in user-data - purchasedItems)
    const [cartInfo, setCartInfo] = useState(currentUserInfo?.purchasedItems || []);

    return (
        <div className='profile-page'>
            <form className='profile-user'>
                <h2>Your Profile</h2>

                <div className='profile-user-container'>
                    <ul>
                        <li>Username:</li>
                        <li>Email:</li>
                    </ul>

                    <ul>
                        <li>{userInfo.username}</li>
                        <li>{userInfo.email}</li>
                    </ul>
                </div>
            </form>
            <hr width="100%" />
            <div>
                <h2>Your Favorite Styles</h2>
                {favoriteStyle.length > 0 ? (
                    <div className="favorite-styles-container">
                        <table className="favorite-styles-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {favoriteStyle.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>
                                            <img src={item.image} alt={item.name} className="favorite-style-image" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>You have no favorite styles yet.</p>
                )}
            </div>







            <div className='profile-order'>
                <h2>Your order</h2>
                <div className="cartlist">
                    <div className="cartlist-main">
                        <p>Products</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Date of Purchase</p>
                    </div>
                    <hr />

                    {cartInfo.map((product, index) => (
                        <ul key={index} className="cartItem-format cartlist-main">
                            <img src={product.image[0]} alt="" className="cartItem-product-icon" />
                            <li>{product.name}</li>
                            <li>${product.price}</li>
                            <li>{product.quantity}</li>
                            <li>${product.price * product.quantity}</li>
                            <li>Recently</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile;
