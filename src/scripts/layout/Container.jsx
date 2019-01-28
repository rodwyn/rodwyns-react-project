import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import CartView from '../components/CartView.jsx';
import CheckoutView from '../components/CheckoutView.jsx';
import ProductArea from '../components/ProductArea.jsx';
import ProductDetail from '../components/ProductDetail.jsx';
import PropTypes from 'prop-types';
import React from 'react';

const Container = ({ location }) => (
  <div>
    <TransitionGroup className="transition-group">
      <CSSTransition
        classNames="fade"
        key={ location.key }
        timeout={
          {
            enter: 300,
            exit: 300
          }
        } >
        <section className="route-section">
          <Switch location={ location }>
            <Route component={ ProductArea } exact path="/" />
            <Route component={ ProductDetail } path="/product/:id" />
            <Route component={ CartView } path="/cart" />
            <Route component={ CheckoutView } path="/checkout" />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  </div>
);

Container.propTypes = { location: PropTypes.object.isRequired };

export default withRouter(Container);
