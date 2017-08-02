import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect';

import App from './App';
import Home from './Home';
import ProjectsList from './Projects';
import ProjectView from './Project';
import ProjectEdit from './ProjectEdit';

const UserIsAuthenticated = connectedRouterRedirect({
  authenticatedSelector: state => state.user.logged, // how to get the user state
  redirectPath: '/',
  allowRedirectBack: false,
  authenticatingSelector: state => state.user.logged,
  // redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
});

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
    <IndexRoute component={Home} />

    <Route path="projects" component={UserIsAuthenticated(ProjectsList)} />
    <Route path="/projects/:projectId" component={UserIsAuthenticated(ProjectView)} />
    <Route path="projects/:projectId/edit" component={UserIsAuthenticated(ProjectEdit)} />
    <Redirect from="*" to="/" />
  </Route>
);
