import { createAction } from 'redux-actions';

import api from 'resources/api';

import { SET_DICTIONARIES, CREATE_DICTIONARY, UPDATE_DICTIONARY, DELETE_DICTIONARY } from './actionTypes';

export const setDictionaries = createAction(SET_DICTIONARIES);

const createDictionarySuccess = createAction(CREATE_DICTIONARY);
export function createDictionary(projectId, dictionary) {
  return dispatch => api.createDictionary(projectId, dictionary).then(({ data }) => {
    dispatch(createDictionarySuccess(data));
  });
}

const updateDictionarySuccess = createAction(UPDATE_DICTIONARY);
export function updateDictionary({ id, ...dictionaryData }) {
  return dispatch => api.updateDictionary(id, dictionaryData).then(({ data }) => {
    dispatch(updateDictionarySuccess(data));
  });
}

const deleteDictionarySuccess = createAction(DELETE_DICTIONARY);
export function deleteDictionary(projectId, dictionaryId) {
  return dispatch => api.deleteDictionary(projectId, dictionaryId).then(() => {
    dispatch(deleteDictionarySuccess(dictionaryId));
  });
}
