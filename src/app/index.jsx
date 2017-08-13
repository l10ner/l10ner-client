import React from 'react';
import ReactDOM from 'react-dom';
import browserHistory from 'react-router/lib/browserHistory';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies
import { syncHistoryWithStore } from 'react-router-redux';

import 'bootstrap/dist/css/bootstrap.css';


import Root from 'components/Root';

import { USER_TOKEN } from 'config';
import configureStore from 'config/redux';
import { getUser } from 'redux/user/actions';

import 'assets/style.css';


const store = configureStore({}, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
// const routes = getRoutes(store);
const token = localStorage.getItem(USER_TOKEN);


let bootApp = new Promise(resolve => resolve());


if (token) {
  bootApp = store.dispatch(getUser(token));
}


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );
};

bootApp.then(() => render(Root)).catch(() => render(Root));

// render(Root);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default; // eslint-disable-line global-require

    render(NewRoot);
  });
}
