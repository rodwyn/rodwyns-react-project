import CustomButton from './CustomButton.jsx';
import CustomRaiting from './CustomRating.jsx';
import NumberComponent from './NumberComponent.jsx';
import {Products} from '../../data/Products.jsx';
import PropTypes from 'prop-types';
import React from 'react';

const ProductDetail = ({ match }) => {
  function getProduct(id) {
    return product => product.id === parseInt(id);
  }

  const ID = match.params.id;

  const {
    imgSrc,
    price,
    description,
    rate,
    stock
  } = Products.find(getProduct(ID));

  return (
    <div className="container-gap page product-detail-view">
      <div className="col-12 col-md-7">
        <img src={ imgSrc } />
      </div>
      <div className="col-12 col-md-5">
        <div className="product-meta-data">
          <p className="product-price">${ price }</p>
          <h6>{ description }</h6>
          <CustomRaiting rate={ rate } />
          <p className="avaibility">
            <i className={ (stock > 0) ? 'badge-success' : 'badge-danger' } />
            { (stock > 0) ? 'In' : 'Out' } Stock
          </p>
        </div>
        <div className="short-overview">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid quae eveniet culpa officia quidem mollitia impedit iste
            asperiores nisi reprehenderit consequatur, autem, nostrum pariatur
            enim?
          </p>
        </div>
        <NumberComponent />
        <CustomButton text="Add to cart" />
      </div>
    </div>
  );
};

ProductDetail.propTypes = { match: PropTypes.object.isRequired };

export default ProductDetail;
