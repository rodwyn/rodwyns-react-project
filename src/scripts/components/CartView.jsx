import CartList from './CartList.jsx';
import CartSummary from './CartSummary.jsx';
import React from 'react';

const CartView = () => {
  return (
    <div className="container-gap page">
      <div className="col-12">
        <h2>Shopping Cart</h2>
      </div>
      <div className="col-12 col-lg-7">
        <CartList />
      </div>
      <div className="col-12 col-lg-5">
        <CartSummary />
      </div>
    </div>
  );
};

export default CartView;
