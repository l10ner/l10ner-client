import { handleActions } from 'redux-actions';

import { SET_LOCALES, CREATE_LOCALE, UPDATE_LOCALE, DELETE_LOCALE } from './actionTypes';

const initState = {
  entries: {},
  entriesIds: []
};

const localesReducer = handleActions({
  [SET_LOCALES]: (state, action) => ({
    ...state,
    entries: action.payload.reduce((mem, l) => ({ ...mem, [l.id]: { ...l } }), {}),
    entriesIds: action.payload.map(l => l.id)
  }),
  [CREATE_LOCALE]: (state, action) => ({
    ...state,
    entries: {
      ...state.entries,
      [action.payload.id]: action.payload
    },
    entriesIds: [action.payload.id, ...state.entriesIds]

  }),
  [UPDATE_LOCALE]: (state, action) => ({
    ...state,
    entries: {
      ...state.entries,
      [action.payload.id]: action.payload
    },
  }),
  [DELETE_LOCALE]: (state, action) => {
    const entries = { ...state.entries };

    delete entries[action.payload]; // use reduce ?

    return {
      ...state,
      entries,
      entriesIds: state.entriesIds.filter(id => id !== action.payload)
    };
  },
}, initState);

export default localesReducer;
