import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
// import { UserAuthWrapper } from 'redux-auth-wrapper';

import App from 'components/App';
import Dashboard from './Dashboard';
import Project from './Project';
import ProjectEdit from './ProjectEdit';


// const UserIsAuthenticated = UserAuthWrapper({
//   authSelector: state => (state.user.logged ? state.user : {}), // how to get the user state
//   failureRedirectPath: '/',
//   allowRedirectBack: false,
//   authenticatingSelector: state => state.user.logged,
//   // redirectAction: routerActions.replace, // the redux action to dispatch for redirect
//   wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
// });

// export const getRoutes = (/* store */) => {
//   // const connect = fn => (nextState, replaceState) => fn(store, nextState, replaceState);
//
//   return (
//     <Route component={App} path="/">
//       <IndexRoute component={Dashboard} />
//
//       <Redirect from="*" to="/" />
//     </Route>
//   );
// };

export const getRoutes = (/* store */) => (
  <Route component={App} path="/">
    <IndexRoute component={Dashboard} />

    <Route path="projects/:projectId" component={Project} />
    <Route path="projects/:projectId/edit" component={ProjectEdit} />

    <Redirect from="*" to="/" />
  </Route>
);
