import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import Redirect from 'react-router/lib/Redirect';
import IndexRedirect from 'react-router/lib/IndexRedirect';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect';

import App from './App';
import Home from './Home';
import Projects from './projects';
import Project from './projects/Project';
import Dictionary from './projects/Dictionary';
import DictionaryKeys from './projects/DictionaryKeys';
import DictionaryValues from './projects/DictionaryValues';
import ProjectEdit from './projects/edit';
import ProjectEditBasic from './projects/edit/Basic';
import ProjectEditMembers from './projects/edit/Members';
import ProjectEditLocales from './projects/edit/Locales';
import ProjectEditDictionaries from './projects/edit/Dictionaries';

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

    <Route path="projects/:projectId" component={UserIsAuthenticated(Project)}>
      <IndexRedirect to="dictionaries" />

      <Route path="dictionaries" components={Dictionary}>
        <Route path=":dictionaryId">
          <IndexRoute component={DictionaryKeys} />
          <Route path="locales/:localeId" components={DictionaryValues} />
        </Route>
      </Route>

      <Route path="edit" component={ProjectEdit}>
        <IndexRoute component={ProjectEditBasic} />
        <Route path="locales" component={ProjectEditLocales} />
        <Route path="members" component={ProjectEditMembers} />
        <Route path="dictionaries" component={ProjectEditDictionaries} />
      </Route>
    </Route>

    <Redirect from="*" to="/" />
  </Route>
);
