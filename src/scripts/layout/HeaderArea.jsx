import NavList from './NavList.jsx';
import PropTypes from 'prop-types';
import React from 'react';

class HeaderArea extends React.Component {
  render() {
    return (
      <header
        className={ `header-area ${ this.props.headerClass }` }>
        <a className="logo" href="#">
          Furniture
          <span>store</span>
        </a>
        <NavList />
      </header>
    );
  }
}

HeaderArea.propTypes = { headerClass: PropTypes.string };

HeaderArea.defaultProps = { headerClass: '' };

export default HeaderArea;
