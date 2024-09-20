import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import './CartItem.css'
import './Modal.css'
import { DataContext } from "../../context/DataContext";
import { Link, useNavigate } from "react-router-dom";

function CartList() {

    const { cart, setCart } = useContext(DataContext)
    const navigate = useNavigate();
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const getTotalPrice = () => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };
    const increaseQuantity = (productId) => {
        console.log("productId: ",productId);
        
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };
    console.log("cart: ",cart);
    function handleGetCheckout(){
        navigate("/checkout")
    }
    return (
        <div className="cart-container">
            <h1>SHOPPING CART</h1>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart && cart.map((item, index) => {
                        return (
                            <tr>
                                <td className="item">
                                    <img src={item.image[0]} alt="Highball 29" />
                                    <span>{item.name}</span>
                                </td>
                                <td className="price">{item.price}</td>
                                <td className="quantity">
                                    <button className="quantity-btn" onClick={()=>decreaseQuantity(item.id)}>-</button>
                                    <input type="number" value={item.quantity} min="1" readonly />
                                    <button className="quantity-btn" onClick={()=>increaseQuantity(item.id)}>+</button>
                                </td>
                                <td className="total">{(item.quantity * item.price).toFixed(2)} $</td>
                                <td className="remove"><button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

            <div className="cart-summary">
                <textarea placeholder="Add a note for this seller..."></textarea>
                <div className="summary-actions">
                    <button className="continue-shopping">CONTINUE SHOPPING</button>
                    <button className="checkout" onClick={handleGetCheckout}>CHECKOUT</button>
                </div>
                <div className="total-amount">
                    <span>Total:</span>
                    <span>{getTotalPrice().toFixed(2)}$</span>
                </div>
            </div>
        </div>
    );
}

export default CartList;