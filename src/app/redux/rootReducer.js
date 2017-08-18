import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user/reducer';
import projects from './projects/reducer';
import values from './values/reducer';
import keys from './keys/reducer';
import dictionaries from './dictionaries/reducer';
import locales from './locales/reducer';


const rootReducer = combineReducers({
  user,
  projects,
  values,
  keys,
  dictionaries,
  locales,
  routing: routerReducer
});

export default rootReducer;
