import React, { Component } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';


// import configureStore from 'config/redux';
import { getRoutes } from 'routes';

// const store = configureStore({}, browserHistory);
// const routes = getRoutes(store);

class Root extends Component {
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
