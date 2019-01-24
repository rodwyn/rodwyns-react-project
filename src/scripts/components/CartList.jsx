import { Cart } from '../../data/Cart.jsx';
import NumberComponent from './NumberComponent.jsx';
import React from 'react';

const CartList = () => {
  function generateList() {
    const products = [];

    Cart.map((product, index) => {
      products.push(
        <div className="cart-table-row container-gap" key={ index }>
          <div className="col-6 col-sm-3">
            <img src={ product.thumbnail } />
          </div>
          <div className="col-6 col-sm-3">
            <h5>{ product.description }</h5>
          </div>
          <div className="col-6 col-sm-2">${ product.price }</div>
          <div className="col-6 col-sm-4">
            <NumberComponent settings={{ value: product.quantity }} />
          </div>
        </div>
      );
    });

    return products;
  }

  return (
    <div className="cart-table">
      { generateList() }
    </div>
  );
};

export default CartList;
