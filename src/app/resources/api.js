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
    // return api.get(`${API_SERVER}/auth/logout`);
  },


  projectCreate(project) {
    return api.post(`${API_SERVER}/projects`, JSON.stringify(project));
  },
  projectList() {
    return api.get(`${API_SERVER}/projects`);
  },
};
