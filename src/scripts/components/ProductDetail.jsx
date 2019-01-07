import {Products} from '../../data/Products.jsx';
import PropTypes from 'prop-types';
import React from 'react';

const ProductDetail = ({ match }) => {
  const ID = match.params.id;

  function getProduct(id) {
    return product => product.id === parseInt(id);
  }

  // console.log(Products.find(getProduct(ID)));

  return (
    <div className="container page">
      <div className="col-12 col-lg-7">
      x
      </div>
      <div className="col-12 col-lg-5">
      y
      </div>
    </div>
  );
};

ProductDetail.propTypes = { match: PropTypes.object.isRequired };

export default ProductDetail;
