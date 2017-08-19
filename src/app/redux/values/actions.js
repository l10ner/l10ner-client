import { createAction } from 'redux-actions';

import api from 'resources/api';

import { GET_DICTONARY_VALUES, CREATE_DICTONARY_VALUE, UPDATE_DICTONARY_VALUE, DELETE_DICTONARY_VALUE }
  from './actionTypes';

const getDictionaryValuesSuccess = createAction(GET_DICTONARY_VALUES);
export function getDictionaryValues(query) {
  return dispatch => api.getDictionaryValues(query).then(({ data }) => {
    dispatch(getDictionaryValuesSuccess(data.data));
  });
}

const createDictionaryValueSuccess = createAction(CREATE_DICTONARY_VALUE);
export function createDictionaryValue(value) {
  return dispatch => api.createDictionaryValue(value).then(({ data }) => {
    dispatch(createDictionaryValueSuccess(data));
  });
}

const updateDictionaryValueSuccess = createAction(UPDATE_DICTONARY_VALUE);
export function updateDictionaryValue(value) {
  return dispatch => api.updateDictionaryValue(value).then(({ data }) => {
    dispatch(updateDictionaryValueSuccess(data));
  });
}

const deleteDictionaryValueSuccess = createAction(DELETE_DICTONARY_VALUE);
export function deleteDictionaryValue(query) {
  return dispatch => api.deleteDictionaryValue(query).then(({ data }) => {
    dispatch(deleteDictionaryValueSuccess(data.id));
  });
}
