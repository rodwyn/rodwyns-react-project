import Container from './layout/Container.jsx';
import HeaderArea from './layout/HeaderArea.jsx';
import NavbarToggle from './components/NavbarToggle.jsx';
import NewsletterForm from './components/NewsletterForm.jsx';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
      <Router>
        <div>
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
            <Container />
            <ScrollUp />
          </div>
          <div className="newsletter-area container">
            <div className="col-12 col-md-6 col-lg-7">
              <h2>Subscribe for a <span>25% Discount</span></h2>
              <p>
                Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit
                amet mi vulputate consectetur. Donec auctor interdum purus, ac
                finibus massa bibendum nec.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
