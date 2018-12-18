import NavList from './NavList.jsx';
import React from 'react';

class HeaderArea extends React.Component {
  render() {
    return (
      <header className="header-area">
        <a className="logo" href="#">
          Furniture
          <span>store</span>
        </a>
        <NavList />
      </header>
    );
  }
}

export default HeaderArea;
