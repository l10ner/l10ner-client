import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { replace } from 'react-router-redux';

// import { getProject, dropProjectData } from 'redux/projects/actions';

import DictionaryKeys from 'components/DictionaryKeys';

class DictionaryValues extends Component {
  static propTypes = {
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired
    }).isRequired,
  };

  render() {
    const { params } = this.props;

    return (
      <div>
        <DictionaryKeys
          projectId={Number(params.projectId)}
          localeId={Number(params.localeId)}
          dictionaryId={Number(params.dictionaryId)}
          hash={`${params.projectId}__${params.localeId}__${params.dictionaryId}`}
        />
      </div>
    );
  }
}

export default DictionaryValues;
