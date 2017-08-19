import { handleActions } from 'redux-actions';

import { GET_DICTONARY_VALUES, CREATE_DICTONARY_VALUE, UPDATE_DICTONARY_VALUE, DELETE_DICTONARY_VALUE }
  from './actionTypes';

const initState = {
  entries: {},
  entriesIds: []
};

const valuesReducer = handleActions({
  [GET_DICTONARY_VALUES]: (state, action) => ({
    ...state,
    entries: action.payload.reduce((mem, v) => ({ ...mem, [v.id]: { ...v } }), {}),
    entriesIds: action.payload.map(v => v.id)
  }),
  [CREATE_DICTONARY_VALUE]: (state, action) => ({
    ...state,
    entries: {
      ...state.entries,
      [action.payload.id]: action.payload
    },
    entriesIds: [action.payload.id, ...state.entriesIds]

  }),
  [UPDATE_DICTONARY_VALUE]: (state, action) => ({
    ...state,
    entries: {
      ...state.entries,
      [action.payload.id]: action.payload
    },
  }),
  [DELETE_DICTONARY_VALUE]: (state, action) => {
    const entries = { ...state.entries };

    delete entries[action.payload]; // use reduce ?

    return {
      ...state,
      entries,
      entriesIds: state.entriesIds.filter(id => id !== action.payload)
    };
  },
}, initState);

export default valuesReducer;
