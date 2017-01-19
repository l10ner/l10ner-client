import { createAction } from 'redux-actions';

// import api from 'store/api';
import { LOGIN, LOGOUT, SIGNUP } from './actionTypes';

const logInSuccess = createAction(LOGIN);
export function logInUser(data) {
  return function (dispatch) {
    return api.logInUser(data).then(response => dispatch(logInSuccess(response.data)));
  };
}

const logOutSuccess = createAction(LOGOUT);
export function logOutUser() {
  return function (dispatch) {
    return api.logOutUser().then(() => {
      dispatch(logOutSuccess());
yar    });
  };
}

const signUpSuccess = createAction(SIGNUP);
export function signUpUser(data) {
  return function (dispatch) {
    return api.signUpUser(data).then(response => dispatch(signUpSuccess(response.data)));
  };
}
