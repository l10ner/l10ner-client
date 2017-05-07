import { API_SERVER } from 'config';
import configureApi from '../config/api';

const api = configureApi.setup();

export default {
  signUpUser(user) {
    return api.post(`${API_SERVER}/signup`, JSON.stringify(user));
  },
  logInUser(user) {
    return api.post(`${API_SERVER}/authentication`, JSON.stringify(user));
  },
  logOutUser() {
    return api.get(`${API_SERVER}/api/auth/logout`);
  },
};
