import { combineReducers } from 'redux';

import userReducer from 'services/user/reducer';


const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
