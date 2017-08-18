import { createAction } from 'redux-actions';

import api from 'resources/api';
import { SET_LOCALES, CREATE_LOCALE, UPDATE_LOCALE, DELETE_LOCALE } from './actionTypes';

export const setLocales = createAction(SET_LOCALES);


const createLocaleSuccess = createAction(CREATE_LOCALE);
export function createLocale(projectId, locale) {
  return dispatch => api.createLocale(projectId, locale).then(({ data }) => {
    dispatch(createLocaleSuccess(data));
  });
}

const updateLocaleSuccess = createAction(UPDATE_LOCALE);
export function updateLocale({ id, ...localeData }) {
  return dispatch => api.updateLocale(id, localeData).then(({ data }) => {
    dispatch(updateLocaleSuccess(data));
  });
}

const deleteLocaleSuccess = createAction(DELETE_LOCALE);
export function deleteLocale(projectId, localeId) {
  return dispatch => api.deleteLocale(projectId, localeId).then(() => {
    dispatch(deleteLocaleSuccess(localeId));
  });
}
