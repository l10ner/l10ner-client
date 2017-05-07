import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line import/no-extraneous-dependencies

import Root from 'containers/Root';

import configureStore from 'config/redux';
// import { getRoutes } from 'routes';

const store = configureStore({}, browserHistory);
// const routes = getRoutes(store);


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={browserHistory} />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').default; // eslint-disable-line global-require

    render(NewRoot);
  });
}
