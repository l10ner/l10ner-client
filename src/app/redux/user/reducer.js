import { handleActions, combineActions } from 'redux-actions';

import { LOGIN, LOGOUT, SIGNUP } from './actionTypes';

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
  [LOGOUT]: () => ({
    ...initState,
    logged: false
  }),
}, initState);

export default userReducer;
