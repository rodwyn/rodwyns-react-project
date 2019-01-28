import CustomButton from './CustomButton.jsx';
import React from 'react';

const CartSummary = () => {
  return (
    <div className="cart-summary">
      <h5>Cart Total</h5>
      <ul className="summary-table">
        <li><span>subtotal:</span> <span>$140.00</span></li>
        <li><span>delivery:</span> <span>Free</span></li>
        <li><span>total:</span> <span>$140.00</span></li>
      </ul>
      <CustomButton text="Checkout" />
    </div>
  );
};

export default CartSummary;
