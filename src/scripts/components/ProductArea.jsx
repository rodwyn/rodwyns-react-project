import {Products} from '../../data/Products.jsx';
import React from 'react';
import SingleProduct from './SingleProduct.jsx';

const ProductArea = () => {
  const nodeClasses = 'col-12 col-md-6 col-lg-4';
  const table = [[], [], []];
  let col = 0;
  let row = 0;

  Products.map((product, index) => {
    table[row][col] = React.createElement(SingleProduct, {
      key: index.toString(),
      product: product
    });
    row++;

    if ((index + 1) % 3 === 0) {
      col++;
      row = 0;
    }
  });

  const containerChildren = table.map((item, index) => {
    return (
      React.createElement('div', {
        className: nodeClasses,
        key: index
      }, [table[index]])
    );
  });

  const container = React.createElement(
    'div', { className: 'container' }, [containerChildren]
  );

  return (
    container
  );
};

export default ProductArea;
