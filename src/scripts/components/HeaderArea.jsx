import NavList from './NavList.jsx';
import React from 'react';

class HeaderArea extends React.Component {
  render() {
    return (
      <header className="header-area">
        <div className="logo">Furniture</div>
        <NavList />
      </header>
    );
  }
}

export default HeaderArea;
