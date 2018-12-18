import HeaderArea from './components/HeaderArea.jsx';
import NavbarToggle from './components/NavbarToggle.jsx';
import ProductArea from './components/ProductArea.jsx';
import React from 'react';
import ScrollUp from './components/ScrollUp.jsx';

const App = () => {
  return (
    <div className="main-content-wrapper">
      <div className="mobile-nav">
        <a className="logo" href="#">
          Furniture
          <span>store</span>
        </a>
        <NavbarToggle />
      </div>
      <HeaderArea />
      <ProductArea />
      <ScrollUp />
    </div>
  );
};

export default App;
