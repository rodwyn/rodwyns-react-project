import HeaderArea from './components/HeaderArea.jsx';
import NavbarToggle from './components/NavbarToggle.jsx';
import ProductArea from './components/ProductArea.jsx';
import React from 'react';
import ScrollUp from './components/ScrollUp.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = { active: false };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ active: !this.state.active });
  }

  render() {
    const toggleClass = (this.state.active) ? 'active' : '';
    const headerClass = (this.state.active) ? 'active' : '';

    return (
      <div className="main-content-wrapper">
        <div className="mobile-nav">
          <a className="logo" href="#">
            Furniture
            <span>store</span>
          </a>
          <NavbarToggle
            handleOnClick={ this.handleOnClick }
            toggleClass={ toggleClass } />
        </div>
        <HeaderArea headerClass={ headerClass } />
        <ProductArea />
        <ScrollUp />
      </div>
    );
  }
}

export default App;
