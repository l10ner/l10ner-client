import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import { getRoutes } from 'routes';

class Root extends Component {
  render() {
    const { store } = this.props;
    const routes = getRoutes(store);

    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}

export default Root;
