import { handleActions, combineActions } from 'redux-actions';

import { LOGIN, LOGOUT, SIGNUP } from './actionTypes';

const initState = {
  logged: null,
  data: {}
};

const userReducer = handleActions({
  [combineActions(LOGIN, SIGNUP)]: (state, action) => ({
    logged: true,
    ...action.payload.user
  }),
  [LOGOUT]: () => ({
    ...initState,
    logged: false
  }),
}, initState);

export default userReducer;
