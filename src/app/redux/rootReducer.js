import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user/reducer';
import projects from './projects/reducer';


const rootReducer = combineReducers({
  user,
  projects,
  routing: routerReducer
});

export default rootReducer;
