import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import Link from 'react-router/lib/Link';

import { getProject, dropProjectData } from 'redux/projects/actions';

import ProjectNavigation from 'components/ProjectNavigation';
import DictionariesNavigation from 'components/DictionariesNavigation';
import DictionaryKeys from 'components/DictionaryKeys';
import LocalesNavigation from 'components/LocalesNavigation';

class Project extends Component {
  static propTypes = {
    children: PropTypes.node,
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired
    }).isRequired,
    project: PropTypes.shape({
      id: PropTypes.number
    }).isRequired,
    routerReplace: PropTypes.func.isRequired,
    getProject: PropTypes.func.isRequired,
    dropProjectData: PropTypes.func.isRequired,
    locales: PropTypes.arrayOf(PropTypes.shape({})),
    dictionaries: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {
    children: undefined,
    defaultLocale: undefined,
    locales: [],
    dictionaries: [],
  };

  componentWillMount() {
    console.log(this.props);
  }
  componentDidMount() {
    this.getProjectData();
    this.checkRedirectRule();
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.projectId !== prevProps.params.projectId) this.getProjectData();

    if (this.props.project.id && this.props.project.id !== prevProps.project.id) this.checkRedirectRule();
  }

  componentWillUnmount() {
    this.props.dropProjectData();
  }

  getProjectData() {
    this.props.getProject(this.props.params.projectId);
  }

  checkRedirectRule() {
    const { children, project, dictionaries, params } = this.props;

    if (children || !project.defaultLocale) return;

    const projectId = params.projectId;
    const localeId = params.localeId || project.defaultLocale;
    const dictionaryId =
      (!params.dictionaryId && dictionaries.length === 0) ? '' : `/${(params.dictionaryId || dictionaries[0].id)}`;

    this.props.routerReplace(`/projects/${projectId}/locales/${localeId}/dictionaries${dictionaryId}`);
  }

  render() {
    const { children, params, project, locales, dictionaries } = this.props;

    // console.log('isLoaded', isLoaded);
    if (!project.id) return null;

    if (children) {
      return (<div>
        <ProjectNavigation projectId={project.id} />
        {children}
        <hr />
        <Link to="/projects" className="btn btn-primary">Back to projects</Link>
      </div>);
    }

    const localeId = Number(params.localeId || project.defaultLocale);
    const dictionaryId = Number(params.dictionaryId);

    return (
      <div>
        <h3>{project.name}</h3>

        <div className="row mt-4">
          <div className="col-sm-3">
            <DictionariesNavigation
              items={dictionaries}
              projectId={project.id}
              localeId={localeId}
            />
          </div>
          <div className="col-sm-9">
            <LocalesNavigation
              items={locales}
              projectId={project.id}
              dictionaryId={dictionaryId}
            />
            <DictionaryKeys
              projectId={project.id}
              localeId={localeId}
              dictionaryId={dictionaryId}
              hash={`${project.id}__${localeId}__${dictionaryId}`}
            />
          </div>
        </div>
        <hr />
        <p>
          наверное стоит вынести таблицу в отдельный view-route locales/:localeId/dictionaries/:dictionaryId
        </p>
      </div>
    );
  }
}

// WTF
function mapStateToProps({ projects, dictionaries, locales }) {
  return {
    dictionaries: dictionaries.entriesIds.map(id => dictionaries.entries[id]),
    locales: locales.entriesIds.map(id => locales.entries[id]),
    project: projects.current,
  };
}
export default connect(mapStateToProps, { getProject, dropProjectData, routerReplace: replace })(Project);
