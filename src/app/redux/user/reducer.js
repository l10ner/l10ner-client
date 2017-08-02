import { handleActions, combineActions } from 'redux-actions';

import { LOGIN, LOGOUT, SIGNUP, SET_SESSION } from './actionTypes';

const initState = {
  logged: false,
  username: undefined,
  token: undefined,
};

const userReducer = handleActions({
  [combineActions(LOGIN, SIGNUP)]: (state, action) => ({
    logged: true,
    ...action.payload
  }),
  [SET_SESSION]: (state, action) => (action.payload ? {
    logged: true,
    ...action.payload
  } : initState),
  [LOGOUT]: () => ({
    ...initState,
    logged: false
  }),
}, initState);

export default userReducer;
