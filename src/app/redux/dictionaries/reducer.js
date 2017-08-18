import { handleActions } from 'redux-actions';

import { SET_DICTIONARIES, CREATE_DICTIONARY, UPDATE_DICTIONARY, DELETE_DICTIONARY } from './actionTypes';

const initState = {
  entries: {},
  entriesIds: []
};

const dicitionariesReducer = handleActions({
  [SET_DICTIONARIES]: (state, action) => ({
    ...state,
    entries: action.payload.reduce((mem, d) => ({ ...mem, [d.id]: { ...d } }), {}),
    entriesIds: action.payload.map(d => d.id)
  }),
  [CREATE_DICTIONARY]: (state, action) => ({
    ...state,
    entries: {
      ...state.entries,
      [action.payload.id]: action.payload
    },
    entriesIds: [action.payload.id, ...state.entriesIds]

  }),
  [UPDATE_DICTIONARY]: (state, action) => ({
    ...state,
    entries: {
      ...state.entries,
      [action.payload.id]: action.payload
    },
  }),
  [DELETE_DICTIONARY]: (state, action) => {
    const entries = { ...state.entries };

    delete entries[action.payload]; // use reduce ?

    return {
      ...state,
      entries,
      entriesIds: state.entriesIds.filter(id => id !== action.payload)
    };
  },
}, initState);

export default dicitionariesReducer;
