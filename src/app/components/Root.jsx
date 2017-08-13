import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Provider } from 'react-redux';


// import configureStore from 'config/redux';
import { getRoutes } from 'routes';

// const store = configureStore({}, browserHistory);
// const routes = getRoutes(store);

class Root extends Component {
  static propTypes = {
    store: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired
  };

  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <Router history={history} routes={getRoutes(store)} />
      </Provider>
    );
  }
}

export default Root;
