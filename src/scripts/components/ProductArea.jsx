import {Products} from '../../data/Products.jsx';
import React from 'react';
import SingleProduct from './SingleProduct.jsx';

const TABLET_SIZE = 768;
const DESKTOP_SIZE = 1024;

class ProductArea extends React.Component {
  constructor() {
    super();

    this.state = {
      arrayDimension: 0,
      nodeClasses: 'col-12'
    };

    this.updateGrid = this.updateGrid.bind(this);
  }

  componentDidMount() {
    this.updateGrid();
    window.addEventListener('resize', this.updateGrid);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateGrid);
  }

  updateGrid() {
    if (window.innerWidth < TABLET_SIZE) {
      this.setState({
        arrayDimension: 0,
        nodeClasses: 'col-12'
      });
    } else if (window.innerWidth >= TABLET_SIZE
        && window.innerWidth < DESKTOP_SIZE) {
      this.setState({
        arrayDimension: 2,
        nodeClasses: 'col-md-6'
      });
    } else if (window.innerWidth >= DESKTOP_SIZE) {
      this.setState({
        arrayDimension: 3,
        nodeClasses: 'col-lg-4'
      });
    }
  }

  render() {
    const table = new Array();

    if (this.state.arrayDimension > 0) {
      let col = 0;
      let row = 0;

      for (let i = 0; i < this.state.arrayDimension; i++) {
        table[i] = new Array();
      }

      Products.map((product, index) => {
        table[row][col] = React.createElement(SingleProduct, {
          key: index.toString(),
          product: product
        });
        row++;

        if ((index + 1) % this.state.arrayDimension === 0) {
          col++;
          row = 0;
        }
      });
    } else {
      Products.map((product, index) => {
        table[index] = React.createElement(SingleProduct, {
          key: index.toString(),
          product: product
        });
      });
    }

    const containerChildren = table.map((item, index) => {
      return (
        React.createElement('div', {
          className: this.state.nodeClasses,
          key: index
        }, [table[index]])
      );
    });

    const container = React.createElement(
      'div', { className: 'container page' }, [containerChildren]
    );

    return (
      container
    );
  }
}

export default ProductArea;
