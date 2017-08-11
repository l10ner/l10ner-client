import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect';

import App from './App';
import Home from './Home';
import Projects from './projects';
import ProjectView from './projects/View';
import ProjectEdit from './projects/Edit';
import ProjectMembers from './projects/Members';
import ProjectLocales from './projects/Locales';

const UserIsAuthenticated = connectedRouterRedirect({
  authenticatedSelector: state => state.user.logged, // how to get the user state
  redirectPath: '/',
  allowRedirectBack: false,
  authenticatingSelector: state => state.user.logged,
  // redirectAction: routerActions.replace, // the redux action to dispatch for redirect
  wrapperDisplayName: 'UserIsAuthenticated', // a nice name for this auth check
});

export const getRoutes = store => (
  <Route component={App} path="/">
    <IndexRoute
      component={Home}
      onEnter={(nextState, replace) => {
        if (store.getState().user.logged) replace('/projects');
      }}
    />

    <Route path="projects" component={UserIsAuthenticated(Projects)} />
    <Route path="projects/:projectId" component={UserIsAuthenticated(ProjectView)}>
      <Route path="edit" component={ProjectEdit} />
      <Route path="locales" component={ProjectLocales} />
      <Route path="members" component={ProjectMembers} />
    </Route>

    <Redirect from="*" to="/" />
  </Route>
);
