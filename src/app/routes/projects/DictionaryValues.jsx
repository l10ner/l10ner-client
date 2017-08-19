import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DictionaryValuesList from 'components/DictionaryValuesList';

class DictionaryValues extends Component {
  static propTypes = {
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired,
      dictionaryId: PropTypes.string.isRequired,
      localeId: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { projectId, localeId, dictionaryId } = this.props.params;

    return (
      <div>
        <DictionaryValuesList
          projectId={Number(projectId)}
          localeId={Number(localeId)}
          dictionaryId={Number(dictionaryId)}
        />
      </div>
    );
  }
}

export default DictionaryValues;
