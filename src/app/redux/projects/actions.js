import { createAction } from 'redux-actions';

import api from 'resources/api';

import { setDictionaries } from 'redux/dictionaries/actions';
import { setLocales } from 'redux/locales/actions';

import { GET_PROJECTS, CREATE_PROJECT, GET_PROJECT, DROP_CURRENT_PROJECT, UPDATE_PROJECT, DELETE_PROJECT }
  from './actionTypes';


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

export const dropProjectData = createAction(DROP_CURRENT_PROJECT);


const getProjectSuccess = createAction(GET_PROJECT);
export function getProject(projectId) {
  return dispatch => api.projectDetails(projectId).then(({ data }) => {
    const { dictionaries, locales, ...projectData } = data;

    dispatch(setDictionaries(dictionaries));
    dispatch(setLocales(locales));
    dispatch(getProjectSuccess(projectData));
  });
}

const createProjectSuccess = createAction(CREATE_PROJECT);
export function createProject(project) {
  return dispatch => api.projectCreate(project).then(({ data }) => {
    dispatch(createProjectSuccess(data));
  });
}


const updateProjectSuccess = createAction(UPDATE_PROJECT);
export function updateProject({ id, ...projectData }) {
  return dispatch => api.projectUpdate(id, projectData).then(({ data }) => {
    dispatch(updateProjectSuccess(data));
  });
}


const deleteProjectSuccess = createAction(DELETE_PROJECT);
export function deleteProject(id) {
  return dispatch => api.projectDelete(id).then(() => {
    dispatch(deleteProjectSuccess(id));
  });
}
