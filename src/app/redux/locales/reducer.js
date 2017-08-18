import { handleActions } from 'redux-actions';

import { SET_LOCALES } from './actionTypes';

const initState = {
  entries: {},
  entriesIds: []
};

const localesReducer = handleActions({
  [SET_LOCALES]: (state, action) => ({
    ...state,
    entries: action.payload.reduce((mem, l) => ({ ...mem, [l.id]: { ...l } }), {}),
    entriesIds: action.payload.map(l => l.id)
  })
}, initState);

export default localesReducer;
