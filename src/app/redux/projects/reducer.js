import { handleActions } from 'redux-actions';

import { GET_PROJECTS, CREATE_PROJECT } from './actionTypes';

const initState = {
  entries: [],
  pager: {}
};

const userReducer = handleActions({
  [CREATE_PROJECT]: (state, action) => ({
    ...initState,
  }),
  [GET_PROJECTS]: (state, action) => ({
    ...initState,
  }),
}, initState);

export default userReducer;
