import { handleActions } from 'redux-actions';

import { GET_PROJECTS, CREATE_PROJECT, GET_PROJECT, DROP_PROJECT, DELETE_PROJECT, UPDATE_PROJECT,
  UPDATE_LOCALE } from './actionTypes';

const initState = {
  entries: [],
  pager: {},
  current: {}
};

const userReducer = handleActions({
  [CREATE_PROJECT]: (state, action) => ({
    ...state,
    entries: [action.payload, ...state.entries]
    // N.B. pagination still old
  }),
  [GET_PROJECTS]: (state, action) => ({
    ...state,
    ...action.payload
  }),
  [GET_PROJECT]: (state, action) => ({
    ...state,
    current: action.payload
  }),
  [UPDATE_PROJECT]: (state, action) => ({
    ...state,
    current: {
      ...state.current,
      ...action.payload
    }
  }),
  [DROP_PROJECT]: state => ({
    ...state,
    current: {}
  }),
  [DELETE_PROJECT]: (state, action) => ({
    ...state,
    entries: state.entries.filter(p => p.id !== action.payload)
    // N.B. pagination still old
  }),
  [UPDATE_LOCALE]: (state, action) => ({
    ...state,
    current: {
      ...state.current,
      locales: state.current.locales.map(locale => (locale.id === action.payload.id ? action.payload : locale))
    }
  }),
}, initState);

export default userReducer;
