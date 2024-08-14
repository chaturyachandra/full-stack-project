// Payment.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default payment method is card
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [upiId, setUpiId] = useState('');
  const [errors, setErrors] = useState({});
  
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || 0;

  const validateForm = () => {
    const newErrors = {};
    if (paymentMethod === 'card') {
      if (!cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!cvv) newErrors.cvv = 'CVV is required';
      if (!cardName) newErrors.cardName = 'Card name is required';
    } else if (paymentMethod === 'upi') {
      if (!upiId) newErrors.upiId = 'UPI ID is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process payment here
      console.log('Payment processed');
      alert("Payment Successful")
    }
  };
  

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <p>Total Amount: ₹{totalAmount}</p>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="card">Card</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {paymentMethod === 'card' && (
          <>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className={errors.cardNumber ? 'error' : ''}
              />
              {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className={errors.expiryDate ? 'error' : ''}
              />
              {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className={errors.cvv ? 'error' : ''}
              />
              {errors.cvv && <span className="error-message">{errors.cvv}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="cardName">Name on Card</label>
              <input
                type="text"
                id="cardName"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className={errors.cardName ? 'error' : ''}
              />
              {errors.cardName && <span className="error-message">{errors.cardName}</span>}
            </div>
          </>
        )}

        {paymentMethod === 'upi' && (
          <div className="form-group">
            <label htmlFor="upiId">UPI ID</label>
            <input
              type="text"
              id="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className={errors.upiId ? 'error' : ''}
            />
            {errors.upiId && <span className="error-message">{errors.upiId}</span>}
          </div>
        )}

        <button type="submit" className="submit-button" > Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;
