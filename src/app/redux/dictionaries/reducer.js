import { handleActions } from 'redux-actions';

import { SET_DICTIONARIES } from './actionTypes';

const initState = {
  entries: {},
  entriesIds: []
};

const dicitionariesReducer = handleActions({
  [SET_DICTIONARIES]: (state, action) => ({
    ...state,
    entries: action.payload.reduce((mem, d) => ({ ...mem, [d.id]: { ...d } }), {}),
    entriesIds: action.payload.map(d => d.id)
  })
}, initState);

export default dicitionariesReducer;
