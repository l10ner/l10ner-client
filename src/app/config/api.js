import axios from 'axios';

import { API_SERVER } from 'config';

export default {
  setup() {
    const api = axios.create({
      baseURL: API_SERVER,
      timeout: 10000,
      withCredentials: true,
      headers: {
        Accept: 'application/json, application/xml, text/play, text/html, *.*',
        'Content-Type': 'application/json; charset=utf-8',
        'X-Requested-With': 'XMLHttpRequest',
      }
    });

// Add a request interceptor
    api.interceptors.request.use(
            config => config,
            ({ data }) => {
              const error = data ? data.error || data : {};

                // console.log('// Do something with request error', error);
                // Do something with request error
              // if (api.storeDispatch) {
              //   api.storeDispatch(error.message || error || 'SERVER_ERROR');
              // }

              return Promise.reject(error);
            }
        );

// Add a response interceptor
    api.interceptors.response.use(
            response => response,
            ({ config, response }) => {
              // const { code, data, name, error, config, response } = err;
              //
              // console.log(Object.keys(err), 'interceptor');
              // console.log(config, response, 'interceptor');
              // console.log(code, data, name, error, f, 'interceptor');
              // const error = data ? data.error || data : {};
                // console.log('Do something with response error', error);

              // if (api.storeDispatch) {
              //   const errorMessage = Object.keys(error).length > 0 ?
              // (error.message || 'SERVER_ERROR') : 'SERVER_ERROR';
              //
              //   api.storeDispatch(errorMessage);
              // }

              return Promise.reject(response);
            }
        );

    this.api = api;

    return api;
  }
};
