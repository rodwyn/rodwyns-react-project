import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import ProductArea from '../components/ProductArea.jsx';
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
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  </div>
);

Container.propTypes = { location: PropTypes.object.isRequired };

export default withRouter(Container);
