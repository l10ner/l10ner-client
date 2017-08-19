import { createAction } from 'redux-actions';

import api from 'resources/api';

import { GET_DICTONARY_KEYS, CREATE_DICTONARY_KEY, UPDATE_DICTONARY_KEY, DELETE_DICTONARY_KEY } from './actionTypes';

const getDictionaryKeysSuccess = createAction(GET_DICTONARY_KEYS);
export function getDictionaryKeys(query) {
  return dispatch => api.getDictionaryKeys(query).then(({ data }) => {
    dispatch(getDictionaryKeysSuccess(data.data));
  });
}

const createDictionaryKeySuccess = createAction(CREATE_DICTONARY_KEY);
export function createDictionaryKey(key) {
  return dispatch => api.createDictionaryKey(key).then(({ data }) => {
    dispatch(createDictionaryKeySuccess(data));
  });
}

const updateDictionaryKeySuccess = createAction(UPDATE_DICTONARY_KEY);
export function updateDictionaryKey(key) {
  return dispatch => api.updateDictionaryKey(key).then(({ data }) => {
    dispatch(updateDictionaryKeySuccess(data));
  });
}

const deleteDictionaryKeySuccess = createAction(DELETE_DICTONARY_KEY);
export function deleteDictionaryKey(query) {
  return dispatch => api.deleteDictionaryKey(query).then(({ data }) => {
    dispatch(deleteDictionaryKeySuccess(data.id));
  });
}
