import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';


import configureStore from 'config/redux';
import { getRoutes } from 'routes';

const store = configureStore({}, browserHistory);
const routes = getRoutes(store);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}

export default Root;
