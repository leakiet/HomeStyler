import React, { useContext, useState } from 'react';
import "./CheckOut.css"
import Swal from 'sweetalert2';
import { DataContext } from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';
function CheckOut(props) {
    const [formData, setFormData] = useState({
        cardholderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        paymentMethod: 'credit-card'
      });
      const { cart, setCart } = useContext(DataContext)
      const navigate = useNavigate();
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Kiểm tra nếu tất cả các trường đều đã nhập liệu
        if (formData.cardholderName && formData.cardNumber && formData.expiryDate && formData.cvv) {
          Swal.fire({
            title: 'Success!',
            text: 'Your payment has been processed successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
              navigate('/products'); // Điều hướng đến trang sản phẩm
            }
          });;
       
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Please fill in all the required fields!',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      };
      const getTotalPrice = () => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };
    return (
        <div className="checkout-container">
        <h2>Checkout</h2>
        <div className="progress-bar">
          <div className="step active">Delivery</div>
          <div className="step active">Confirmation</div>
          <div className="step active">Payment</div>
          <div className="step">Finish</div>
        </div>
        
        <div className="payment-methods">
          <div className="payment-option">
            <input
              type="radio"
              name="paymentMethod"
              id="credit-card"
              value="credit-card"
              checked={formData.paymentMethod === 'credit-card'}
              onChange={handleInputChange}
            />
            <label htmlFor="credit-card">
              <img src="IMAGES/payment/visa.png" alt="Visa Mastercard" />
              <p>Pay {getTotalPrice()}$ with credit card</p>
            </label>
          </div>
          <div className="payment-option">
            <input
              type="radio"
              name="paymentMethod"
              id="paypal"
              value="paypal"
              checked={formData.paymentMethod === 'paypal'}
              onChange={handleInputChange}
            />
            <label htmlFor="paypal">
              <img src="IMAGES/payment/paypal.png" alt="PayPal" />
              <p>Pay {getTotalPrice()}$ with PayPal</p>
            </label>
          </div>
        </div>
  
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="cardholderName">Cardholder's Name</label>
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleInputChange}
              
            />
          </div>
          <div className="input-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              
            />
          </div>
          <div className="input-group">
            <label htmlFor="expiryDate">Valid thru</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleInputChange}
              
            />
          </div>
          <div className="input-group">
            <label htmlFor="cvv">CVV / CVC</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              
            />
          </div>
          <p className="cvv-info">
            * CVV or CVC is the card security code, unique three digits number on the back of your credit card.
          </p>
          <div className="buttons">
            <button type="button" className="back-button">Back</button>
            <button type="submit" className="next-step-button">Submit</button>
          </div>
        </form>
      </div>
    );
}

export default CheckOut;