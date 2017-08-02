import { createAction } from 'redux-actions';
import jwtDecode from 'jwt-decode';

import api from 'resources/api';
import { USER_TOKEN } from 'config';
import { LOGIN, LOGOUT, SIGNUP, SET_SESSION } from './actionTypes';

const logInSuccess = createAction(LOGIN);
export function logIn(user) {
  return dispatch => api.logInUser(user).then(({ data }) => {
    localStorage.setItem(USER_TOKEN, data.accessToken);
    dispatch(logInSuccess({
      username: jwtDecode(data.accessToken).email,
      token: data.accessToken
    }));
  });
}

// const setSessionSuccess = createAction(SET_SESSION);
export function setSession(token) {
  return {
    type: SET_SESSION,
    payload: token ? {
      username: jwtDecode(token).email,
      token
    } : null
  };
}

const logOutSuccess = createAction(LOGOUT);
export function logOut() {
  return dispatch => api.logOutUser().then(() => {
    dispatch(logOutSuccess());
  });
}

const signUpSuccess = createAction(SIGNUP);
export function signUp(data) {
  return dispatch => api.signUpUser(data).then(response => dispatch(signUpSuccess(response.data)));
}
