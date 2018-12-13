import PropTypes from 'prop-types';
import React from 'react';

const SingleProduct = ({ product }) => {
  const {
    link,
    imgSrc,
    price,
    description
  } = product;

  return (
    <div className="single-products-catagory">
      <a href={ link }>
        <img src={ imgSrc } />
        <div className="hover-content">
          <p>From ${price}</p>
          <h4>{description}</h4>
        </div>
      </a>
    </div>
  );
};

SingleProduct.propTypes = { product: PropTypes.object.isRequired };

export default SingleProduct;
