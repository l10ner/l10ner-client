import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';

import configureStore from 'config/redux';
// import configureSockets from './config/socket-io';
import Root from 'containers/Root';


const store = configureStore({}, browserHistory);
// configureSockets(store);

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
