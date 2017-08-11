import { API_SERVER } from 'config';
import configureApi from '../config/api';

const api = configureApi.setup();

export default {
  signUpUser(user) {
    return api.post(`${API_SERVER}/auth/signup`, JSON.stringify(user));
  },
  logInUser(user) {
    return api.post(`${API_SERVER}/authentication`, JSON.stringify(user));
  },
  logOutUser() {
    return api.delete(`${API_SERVER}/authentication`);
  },
  getUser(id) {
    return api.get(`${API_SERVER}/users/${id}`);
  },


  projectCreate(project) {
    return api.post(`${API_SERVER}/projects`, JSON.stringify(project));
  },
  projectList() {
    return api.get(`${API_SERVER}/projects`);
  },
  projectDetails(id) {
    return api.get(`${API_SERVER}/projects/${id}`);
  },
  projectUpdate(id, data) {
    return api.patch(`${API_SERVER}/projects/${id}`, JSON.stringify(data));
  },
  projectDelete(id) {
    return api.delete(`${API_SERVER}/projects/${id}`);
  },


  createLocale(projectId, data) {
    return api.post(`${API_SERVER}/projects/${projectId}/locales`, JSON.stringify(data));
  },
  updateLocale(id, data) {
    return api.patch(`${API_SERVER}/locales/${id}`, JSON.stringify(data));
  },
  deleteLocale(projectId, localeId) {
    return api.delete(`${API_SERVER}/projects/${projectId}/locales/${localeId}`);
  },
};
