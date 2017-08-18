import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';


import DictionariesNavigation from 'components/DictionariesNavigation';
import LocalesNavigation from 'components/LocalesNavigation';

class Dictionary extends Component {
  static propTypes = {
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired
    }).isRequired,
    project: PropTypes.shape({
      id: PropTypes.number
    }).isRequired,
    routerReplace: PropTypes.func.isRequired,
    children: PropTypes.node,
    dictionaries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    locales: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  static defaultProps = {
    children: undefined,
    // dictionaries: [],
  };

  componentDidMount() {
    if (this.props.project.id) this.checkRedirectRule();
  }
  //
  componentDidUpdate(prevProps) {
    if (this.props.project.id && this.props.project.id !== prevProps.project.id) this.checkRedirectRule();
  }

  checkRedirectRule() {
    const { project, dictionaries, params, children } = this.props;

    if (dictionaries.length === 0 || children) return;

    const projectId = params.projectId;
    const localeId = params.localeId || project.defaultLocale;
    const dictionaryId = (params.dictionaryId || dictionaries[0].id);

    this.props.routerReplace(`/projects/${projectId}/dictionaries/${dictionaryId}/locales/${localeId}`);
  }

  render() {
    const { params, project, dictionaries, locales } = this.props;

    if (!project.id) return <div />;

    const localeId = Number(params.localeId);
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

            {this.props.children}
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
export default connect(mapStateToProps, { routerReplace: replace })(Dictionary);
