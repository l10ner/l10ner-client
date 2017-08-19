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


  createDictionary(projectId, data) {
    return api.post(`${API_SERVER}/projects/${projectId}/dictionaries`, JSON.stringify(data));
  },
  updateDictionary(id, data) {
    return api.patch(`${API_SERVER}/dictionaries/${id}`, JSON.stringify(data));
  },
  deleteDictionary(projectId, dictionaryId) {
    return api.delete(`${API_SERVER}/projects/${projectId}/dictionaries/${dictionaryId}`);
  },


  getDictionaryKeys({ projectId, dictionaryId }) {
    return api.get(`${API_SERVER}/projects/${projectId}/dictionaries/${dictionaryId}/keys`);
  },
  createDictionaryKey({ projectId, dictionaryId, ...data }) {
    return api.post(`${API_SERVER}/projects/${projectId}/dictionaries/${dictionaryId}/keys`,
      JSON.stringify(data));
  },
  updateDictionaryKey({ id, projectId, dictionaryId, ...data }) {
    return api.patch(`${API_SERVER}/projects/${projectId}/dictionaries/${dictionaryId}/keys/${id}`,
      JSON.stringify(data)
    );
  },
  deleteDictionaryKey({ projectId, dictionaryId, id }) {
    return api.delete(
      `${API_SERVER}/projects/${projectId}/dictionaries/${dictionaryId}/keys/${id}`
    );
  },

  // createDictionaryPair({ projectId, localeId, dictionaryId, ...data }) {
  //   return api.post(`${API_SERVER}/projects/${projectId}/locales/${localeId}/dictionaries/${dictionaryId}/keys`,
  //     JSON.stringify(data));
  // },
  getDictionaryValues({ projectId, dictionaryId, localeId }) {
    return api.get(`${API_SERVER}/projects/${projectId}/dictionaries/${dictionaryId}/locales/${localeId}/values`);
  },
  createDictionaryValue({ projectId, localeId, dictionaryId, ...data }) {
    return api.post(`${API_SERVER}/projects/${projectId}/dictionaries/${dictionaryId}/locales/${localeId}/values`,
      JSON.stringify(data));
  },
  updateDictionaryValue({ id, projectId, localeId, dictionaryId, ...data }) {
    return api.patch(
      `${API_SERVER}/projects/${projectId}/dictionaries/${dictionaryId}/locales/${localeId}/values/${id}`,
      JSON.stringify(data)
    );
  },
  deleteDictionaryValue({ projectId, dictionaryId, localeId, id }) {
    return api.delete(
      `${API_SERVER}/projects/${projectId}/dictionaries/${dictionaryId}/locales/${localeId}/values/${id}`
    );
  },
};
