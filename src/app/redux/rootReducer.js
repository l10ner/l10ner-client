import { combineReducers } from 'redux';

import user from './user/reducer';
import projects from './projects/reducer';


const rootReducer = combineReducers({
  user,
  projects
});

export default rootReducer;
