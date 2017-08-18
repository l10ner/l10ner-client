import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

// import { getProject, dropProjectData } from 'redux/projects/actions';

// import DictionariesNavigation from 'components/DictionariesNavigation';
import DictionaryItems from 'components/DictionaryKeys';
// import LocalesNavigation from 'components/LocalesNavigation';

class DictionaryKeys extends Component {
  static propTypes = {
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired
    }).isRequired,
  };

  render() {
    const { params } = this.props;

    return (
      <div>
        <DictionaryItems
          projectId={Number(params.projectId)}
          dictionaryId={Number(params.dictionaryId)}
          hash={`${params.projectId}__${params.dictionaryId}`}
          isKeys
        />
      </div>
    );
  }
}

// WTF
function mapStateToProps({ projects, dictionaries }) {
  return {
    dictionaries: dictionaries.entriesIds.map(id => dictionaries.entries[id]),
    project: projects.current,
  };
}
export default connect(mapStateToProps, { routerReplace: replace })(DictionaryKeys);
