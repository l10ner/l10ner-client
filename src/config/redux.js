import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import configureApi from './api';
import reducers from '../services/rootReducer';

export default function configureStore(initialState = {}/* , browserHistory */) {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
