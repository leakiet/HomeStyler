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
        <div class="cart-container">
            <h1>SHOPPING CART</h1>
            <table class="cart-table">
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
                                <td class="item">
                                    <img src={item.image[0]} alt="Highball 29" />
                                    <span>{item.name}</span>
                                </td>
                                <td class="price">{item.price}</td>
                                <td class="quantity">
                                    <button class="quantity-btn" onClick={()=>decreaseQuantity(item.id)}>-</button>
                                    <input type="number" value={item.quantity} min="1" readonly />
                                    <button class="quantity-btn" onClick={()=>increaseQuantity(item.id)}>+</button>
                                </td>
                                <td class="total">{(item.quantity * item.price).toFixed(2)} $</td>
                                <td class="remove"><button class="remove-btn" onClick={() => removeFromCart(item.id)}>×</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

            <div class="cart-summary">
                <textarea placeholder="Add a note for this seller..."></textarea>
                <div class="summary-actions">
                    <button class="continue-shopping">CONTINUE SHOPPING</button>
                    <button class="checkout" onClick={handleGetCheckout}>CHECKOUT</button>
                </div>
                <div class="total-amount">
                    <span>Total:</span>
                    <span>{getTotalPrice().toFixed(2)}$</span>
                </div>
            </div>
        </div>
    );
}

export default CartList;