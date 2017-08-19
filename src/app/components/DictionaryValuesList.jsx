import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getDictionaryValues } from 'redux/values/actions';
import { getDictionaryKeys } from 'redux/keys/actions';
import ModalKeyForm from 'components/modals/KeyForm';
import ModalValueForm from 'components/modals/ValueForm';

class DictionaryValuesList extends Component {
  static propTypes = {
    emptyKeys: PropTypes.bool.isRequired,
    projectId: PropTypes.number.isRequired,
    dictionaryId: PropTypes.number.isRequired,
    localeId: PropTypes.number.isRequired,
    getDictionaryKeys: PropTypes.func.isRequired,
    getDictionaryValues: PropTypes.func.isRequired,
    values: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  state = {
    modalValueForm: false,
    modalKeyForm: false,
    value: undefined
  };

  componentDidMount() {
    this.getValues();

    if (this.props.emptyKeys) this.getKeys();
  }

  componentDidUpdate(prevProps) {
    const { dictionaryId, localeId } = this.props;

    if (dictionaryId !== prevProps.dictionaryId || localeId !== prevProps.localeId) this.getValues();
  }

  getValues() {
    const { projectId, dictionaryId, localeId } = this.props;

    this.props.getDictionaryValues({ projectId, dictionaryId, localeId });
  }

  getKeys() {
    const { projectId, dictionaryId } = this.props;

    this.props.getDictionaryKeys({ projectId, dictionaryId });
  }

  handleEditValue(value) {
    this.setState({ value, modalValueForm: true });
  }

  render() {
    const { projectId, dictionaryId, localeId, values } = this.props;
    const { value, modalValueForm, modalKeyForm } = this.state;

    return (
      <div>
        <button
          onClick={() => this.setState({ modalKeyForm: true })}
          className="btn btn-outline-primary btn-block btn-lg mb-4"
        >
          Add new key
        </button>
        {modalValueForm &&
          <ModalValueForm
            closeModal={() => this.setState({ modalValueForm: false, value: undefined })}
            projectId={projectId}
            dictionaryId={dictionaryId}
            localeId={localeId}
            item={value}
          />
        }
        {modalKeyForm &&
          <ModalKeyForm
            closeModal={() => this.setState({ modalKeyForm: false })}
            projectId={projectId}
            dictionaryId={dictionaryId}
          />
        }
        {values.length > 0 &&
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
              {values.map(item => (
                <tr key={item.id}>
                  <th scope="row" className="align-middle">{item.name}</th>
                  <td className="align-middle">{item.value ? item.value.value : '-'}</td>
                  <td className="align-middle">{item.value ? item.value.updatedAt : '-'}</td>
                  <td className="text-right">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => this.handleEditValue(item)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    );
  }
}

function joinKeysAndValues({ keys, values }) {
  const keyItems = keys.entriesIds.map(id => keys.entries[id]);
  const valueItems = values.entriesIds.map(id => values.entries[id]);
  const valuesById = valueItems.reduce((mem, v) => ({
    ...mem,
    [v.keyId]: { ...v }
  }), {});

  return keyItems.map(k => ({ ...k, value: valuesById[k.id] }));
}

function mapStateToProps({ projects, keys, values }) {
  return {
    values: joinKeysAndValues({ keys, values }),
    project: projects.current,
    emptyKeys: keys.entriesIds.length === 0
  };
}
export default connect(mapStateToProps, { getDictionaryValues, getDictionaryKeys })(DictionaryValuesList);
