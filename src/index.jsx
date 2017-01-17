import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

// import { Router, browserHistory } from 'react-router';
// import { Provider } from 'react-redux';

// import configureStore from 'store/configureStore';
// import configureSockets from 'store/configureSockets';
// import { getRoutes } from './routes';
// import './assets/styles/style.less';

// const initialState = window.REDUX_INITIAL_STATE || {};
// const store = configureStore(initialState, browserHistory);
// configureSockets(store);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
        document.getElementById('root')
    );
};


render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default; // eslint-disable-line global-require

    render(NewApp);
  });
}
