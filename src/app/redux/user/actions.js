import { createAction } from 'redux-actions';
import jwtDecode from 'jwt-decode';
import { replace } from 'react-router-redux';

import api from 'resources/api';
import { USER_TOKEN } from 'config';
import { LOGIN, LOGOUT, SIGNUP } from './actionTypes';

const logInSuccess = createAction(LOGIN);
export function logIn(user) {
  return dispatch => api.logInUser(user).then(({ data }) => {
    localStorage.setItem(USER_TOKEN, data.accessToken);

    dispatch(logInSuccess({
      username: data.email, // Nota Bene!
      token: data.accessToken
    }));
    dispatch(replace('/projects'));
  });
}

// не считая метода апи - полная копипаста логина
const signUpSuccess = createAction(SIGNUP);
export function signUp(user) {
  return dispatch => api.signUpUser(user).then(({ data }) => {
    localStorage.setItem(USER_TOKEN, data.accessToken);

    dispatch(signUpSuccess({
      username: data.email, // Nota Bene!
      token: data.accessToken
    }));
    dispatch(replace('/projects'));
  });
}


export function getUser(token) {
  const { userId } = jwtDecode(token);

  return dispatch => api.getUser(userId).then(({ data }) => {
    dispatch(logInSuccess({
      username: data.email, // Nota Bene!
      token
    }));
  }).catch((e) => {
    if (e.status === 401) localStorage.removeItem(USER_TOKEN); // токен просрочен

    return e;
  });
}

const logOutSuccess = createAction(LOGOUT);
export function logOut() {
  return dispatch => api.logOutUser().then(() => {
    localStorage.removeItem(USER_TOKEN);
    dispatch(logOutSuccess());
  });
}
