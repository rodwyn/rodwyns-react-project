import PropTypes from 'prop-types';
import React from 'react';

class NavbarToggle extends React.Component {
  render() {
    return (
      <div className="navbar-toggle-wrapper">
        <div
          className={ `navbar-toggle ${ this.props.toggleClass }` }
          onClick={ () => this.props.handleOnClick() }>
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}

NavbarToggle.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  toggleClass: PropTypes.string.isRequired
};

export default NavbarToggle;
