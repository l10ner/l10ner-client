import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DictionaryKeysList from 'components/DictionaryKeysList';

class DictionaryKeys extends Component {
  static propTypes = {
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired,
      dictionaryId: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { projectId, dictionaryId } = this.props.params;

    return (
      <div>
        <DictionaryKeysList
          projectId={Number(projectId)}
          dictionaryId={Number(dictionaryId)}
        />
      </div>
    );
  }
}

export default DictionaryKeys;
