import { handleActions } from 'redux-actions';

import { GET_DICTONARY_KEYS, CREATE_DICTONARY_KEY, UPDATE_DICTONARY_KEY, DELETE_DICTONARY_KEY } from './actionTypes';

const initState = {
  entries: {},
  entriesIds: []
};

const keysReducer = handleActions({
  [GET_DICTONARY_KEYS]: (state, action) => ({
    ...state,
    entries: action.payload.reduce((mem, k) => ({ ...mem, [k.id]: { ...k } }), {}),
    entriesIds: action.payload.map(k => k.id)
  }),
  [CREATE_DICTONARY_KEY]: (state, action) => ({
    ...state,
    entries: {
      ...state.entries,
      [action.payload.id]: action.payload
    },
    entriesIds: [action.payload.id, ...state.entriesIds]

  }),
  [UPDATE_DICTONARY_KEY]: (state, action) => ({
    ...state,
    entries: {
      ...state.entries,
      [action.payload.id]: action.payload
    },
  }),
  [DELETE_DICTONARY_KEY]: (state, action) => {
    const entries = { ...state.entries };

    delete entries[action.payload]; // use reduce ?

    return {
      ...state,
      entries,
      entriesIds: state.entriesIds.filter(id => id !== action.payload)
    };
  },
}, initState);

export default keysReducer;
