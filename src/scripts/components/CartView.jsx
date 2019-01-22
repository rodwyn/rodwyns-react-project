import CartSummary from './CartSummary.jsx';
import React from 'react';

const CartView = () => {
  return (
    <div className="container-gap page">
      <div className="col-12">
        <h2>Shopping Cart</h2>
      </div>
      <div className="col-12 col-lg-7">
        <div className="cart-table">
          <div className="cart-table-row container-gap">
            <div className="col-6 col-sm-3">
              <img src="https://colorlib.com/preview/theme/amado/img/bg-img/cart1.jpg" />
            </div>
            <div className="col-6 col-sm-3">
              <h5>White Modern Chair</h5>
            </div>
            <div className="col-6 col-sm-3">$130</div>
            <div className="col-6 col-sm-3">quantity</div>
          </div>
          <div className="cart-table-row container-gap">
            <div className="col-6 col-sm-3">
              <img src="https://colorlib.com/preview/theme/amado/img/bg-img/cart1.jpg" />
            </div>
            <div className="col-6 col-sm-3">
              <h5>White Modern Chair</h5>
            </div>
            <div className="col-6 col-sm-3">$130</div>
            <div className="col-6 col-sm-3">quantity</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-5">
        <CartSummary />
      </div>
    </div>
  );
};

export default CartView;
