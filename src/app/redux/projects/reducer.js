import { handleActions } from 'redux-actions';

import { GET_PROJECTS, CREATE_PROJECT, GET_PROJECT, DROP_CURRENT_PROJECT, DELETE_PROJECT,
  UPDATE_PROJECT, GET_DICTONARY_KEYS } from './actionTypes';

const initState = {
  entries: [],
  pager: {},
  current: {},
  keys: {}
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
  [DROP_CURRENT_PROJECT]: state => ({
    ...state,
    current: {}
  }),
  [DELETE_PROJECT]: (state, action) => ({
    ...state,
    entries: state.entries.filter(p => p.id !== action.payload)
    // N.B. pagination still old
  }),
  [GET_DICTONARY_KEYS]: (state, action) => ({
    ...state,
    keys: action.payload
  }),
}, initState);

export default userReducer;
