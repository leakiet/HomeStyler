import React, { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';

function ProductCard({item,onToggleWishlist}) {
    // const [isFavorite, setIsFavorite] = useState(false);
    const { setCart, setWishList,wishList } = useContext(DataContext)
    const navigate = useNavigate();
    const handleWishlistToggle = () => {
    //   setIsFavorite(!isFavorite);
      onToggleWishlist(item);
    };
    const isFavorite = wishList.some(pro => pro.id === item.id);
    const addToCart = (product) => {
        setCart(prevCart => {
          const itemInCart = prevCart.find(item => item.id === product.id);
          if (itemInCart) {
            return prevCart.map(item =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
      };
      function handleReadMore(item) {
        navigate(`/products/${item.id}`, { state: item })
      }
    return (
        <div class="col-md-4">
            <div class="card mb-4">
                <i onClick={() => handleWishlistToggle()} class= {isFavorite ?"fa-solid fa-bookmark favorite-icon":"fa-regular fa-bookmark favorite-icon"}></i>
                <img src={item.image[0]} class="card-img-top" alt="Sản phẩm 3" />
                <div class="card-body">
                    <h6 class="card-title">{item.name}</h6>
                    <p class="card-text">{item.price}$</p>
                    <div class="card-buttons">
                        <button class="btn btn-addtocart" onClick={() => addToCart(item)}>Add Card</button>
                        <button class="btn btn-readmore" onClick={() => handleReadMore(item)}>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;