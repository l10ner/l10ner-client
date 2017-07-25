import { createAction } from 'redux-actions';

import api from 'resources/api';
import { GET_PROJECTS, CREATE_PROJECT } from './actionTypes';

const getProjectsSuccess = createAction(GET_PROJECTS);
export function getProjects() {
  return dispatch => api.projectList().then(({ data }) => {
    dispatch(getProjectsSuccess({
      entries: data.data,
      pager: {
        total: data.total,
        limit: data.limit,
        skip: data.skip,
      }
    }));
  });
}

const createProjectSuccess = createAction(CREATE_PROJECT);
export function createProject(project) {
  return dispatch => api.projectCreate(project).then(({ data }) => {
    dispatch(createProjectSuccess(data));
  });
}