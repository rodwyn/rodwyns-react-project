import { Link } from 'react-router-dom';
import NavList from './NavList.jsx';
import PropTypes from 'prop-types';
import React from 'react';

class HeaderArea extends React.Component {
  render() {
    return (
      <header
        className={ `header-area ${ this.props.headerClass }` }>
        <Link className="logo" to="/">
          Furniture
          <span>store</span>
        </Link>
        <NavList />
      </header>
    );
  }
}

HeaderArea.propTypes = { headerClass: PropTypes.string };

HeaderArea.defaultProps = { headerClass: '' };

export default HeaderArea;
