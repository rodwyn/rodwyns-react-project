import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const SingleProduct = ({ product }) => {
  const {
    id,
    imgSrc,
    price,
    description
  } = product;

  return (
    <div className="single-products-catagory">
      <Link to={ `/product/${ id }` }>
        <img src={ imgSrc } />
        <div className="hover-content">
          <p>From ${price}</p>
          <h4>{ description }</h4>
        </div>
      </Link>
    </div>
  );
};

SingleProduct.propTypes = { product: PropTypes.object.isRequired };

export default SingleProduct;
