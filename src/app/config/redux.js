import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

// import configureApi from './api';
import reducers from 'redux/rootReducer';

export default function configureStore(initialState = {}, browserHistory) {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(thunk, routerMiddleware(browserHistory)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
