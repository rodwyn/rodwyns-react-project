import CartSummary from './CartSummary.jsx';
import CheckoutForm from './CheckoutForm.jsx';
import React from 'react';

const CheckoutView = () => {
  return (
    <div className="container-gap page">
      <div className="col-12">
        <h2>Checkout</h2>
      </div>
      <div className="col-12 col-lg-7">
        <CheckoutForm />
      </div>
      <div className="col-12 col-lg-5">
        <CartSummary />
      </div>
    </div>
  );
};

export default CheckoutView;
