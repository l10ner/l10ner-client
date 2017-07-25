import { handleActions } from 'redux-actions';

import { GET_PROJECTS, CREATE_PROJECT } from './actionTypes';

const initState = {
  entries: [],
  pager: {}
};

const userReducer = handleActions({
  [CREATE_PROJECT]: (state, action) => ({
    ...state,
    entries: [action.payload, ...state.entries]
  }),
  [GET_PROJECTS]: (state, action) => ({
    ...state,
    ...action.payload
  }),
}, initState);

export default userReducer;
