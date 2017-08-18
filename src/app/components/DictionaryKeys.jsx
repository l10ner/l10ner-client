import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getDictionaryKeys, deleteDictionaryKey } from 'redux/projects/actions';
import ModalKeyValueForm from 'components/modals/KeyValueForm';
import DictionaryKeysListItem from 'components/DictionaryKeysListItem';

class DictionaryKeys extends Component {
  static propTypes = {
    hash: PropTypes.string.isRequired,
    getDictionaryKeys: PropTypes.func.isRequired,
    deleteDictionaryKey: PropTypes.func.isRequired,
    projectId: PropTypes.number.isRequired,
    localeId: PropTypes.number.isRequired,
    dictionaryId: PropTypes.number.isRequired,
    project: PropTypes.shape({}).isRequired,
    keys: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {
    keys: [],
    values: [],
  };

  state = {
    modalKeyValueForm: false,
    pair: undefined
  };

  componentDidMount() {
    this.getKeys();
  }

  componentDidUpdate(prevProps) {
    if (this.props.hash !== prevProps.hash) this.getKeys();
  }

  getKeys() {
    const { projectId, localeId, dictionaryId } = this.props;

    this.props.getDictionaryKeys({ projectId, localeId, dictionaryId });
  }

  handleDeleteDictionaryKey = (keyId) => {
    const { projectId, localeId, dictionaryId } = this.props;

    this.props.deleteDictionaryKey({ projectId, localeId, dictionaryId, id: keyId });
  };

  handleEditKey(pair) {
    // const { projectId, localeId, dictionaryId } = this.props;

    this.setState({ pair, modalKeyValueForm: true });
  }

  render() {
    const { keys, projectId, localeId, dictionaryId, project } = this.props;
    const { modalKeyValueForm, pair } = this.state;
    const isDefaultLocale = project.defaultLocale === localeId;

    return (
      <div>
        <button
          onClick={() => this.setState({ modalKeyValueForm: true })}
          className="btn btn-outline-primary btn-block btn-lg mb-4"
        >
          Add new key
        </button>
        {modalKeyValueForm &&
          <ModalKeyValueForm
            closeModal={() => this.setState({ modalKeyValueForm: false, pair: undefined })}
            projectId={projectId}
            localeId={localeId}
            dictionaryId={dictionaryId}
            pair={pair}
            isDefaultLocale={isDefaultLocale}
          />
        }

        {keys.length > 0 &&
          <table className="table mb-4">
            <thead className="thead-default">
              <tr>
                <th>Key</th>
                <th>Value</th>
                <th>Last Updated</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {keys.map(key => (
                <DictionaryKeysListItem
                  key={key.id}
                  item={key}
                  isDefaultLocale={isDefaultLocale}
                  onDelete={this.handleDeleteDictionaryKey}
                  onEdit={item => this.handleEditKey(item)}
                />
              ))}
            </tbody>
          </table>
        }
        <hr />
        удаление ключей только с дефолтной локали(болд в меню)
        <hr />
        дубликация ключей

      </div>
    );
  }
}

function joinKeysAndValues(store) {
  const { keys, values } = store;

  if (!keys || !values) return [];

  const valuesById = values.reduce((mem, v) => ({
    ...mem,
    [v.keyId]: { ...v }
  }), {});

  return keys.map(k => ({ ...k, value: valuesById[k.id] }));
}


function mapStateToProps({ projects }) {
  return {
    keys: joinKeysAndValues(projects.keys),
    project: projects.current,
  };
}
export default connect(mapStateToProps, { getDictionaryKeys, deleteDictionaryKey })(DictionaryKeys);
