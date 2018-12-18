import React from 'react';

class NavbarToggle extends React.Component {
  constructor() {
    super();

    this.state = { active: false };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const toggleClass = (this.state.active) ? 'active' : '';

    return (
      <div className="navbar-toggle-wrapper">
        <div
          className={ `navbar-toggle ${ toggleClass }` }
          onClick={ this.onClick }>
          <span />
          <span />
          <span />
        </div>
      </div>

    );
  }
}

export default NavbarToggle;
