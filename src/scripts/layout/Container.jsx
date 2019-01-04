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
import React from 'react';

const Container = ({ location }) => (
  <div>
    <TransitionGroup>
      <CSSTransition
        key={ location.key }
        timeout={
          {
            enter: 300,
            exit: 300
          }
        } >
        <Switch location={ location }>
          <Route component={ ProductArea } exact path="/" />
          <Route component={ () => <div>Firts Page</div> } path="/first" />
          <Route component={ () => <div>Second Page</div> } path="/second" />
          <Route component={ () => <div>Third Page</div> } path="/third" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
);

Container.propTypes = { location: PropTypes.string };

Container.defaultProps = { location: '' };

export default withRouter(Container);
