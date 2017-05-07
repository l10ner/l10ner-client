import { createAction } from 'redux-actions';

import api from 'resources/api';
import { LOGIN, LOGOUT, SIGNUP } from './actionTypes';

const logInSuccess = createAction(LOGIN);
export function logIn(data) {
  return dispatch => api.logInUser(data).then(response => dispatch(logInSuccess(response.data)));
}

const logOutSuccess = createAction(LOGOUT);
export function logOut() {
  return function (dispatch) {
    return api.logOutUser().then(() => {
      dispatch(logOutSuccess());
    });
  };
}

const signUpSuccess = createAction(SIGNUP);
export function signUp(data) {
  return function (dispatch) {
    return api.signUpUser(data).then(response => dispatch(signUpSuccess(response.data)));
  };
}
