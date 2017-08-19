import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getDictionaryKeys, deleteDictionaryKey } from 'redux/keys/actions';
import ModalKeyForm from 'components/modals/KeyForm';

class DictionaryKeysList extends Component {
  static propTypes = {
    projectId: PropTypes.number.isRequired,
    dictionaryId: PropTypes.number.isRequired,
    getDictionaryKeys: PropTypes.func.isRequired,
    deleteDictionaryKey: PropTypes.func.isRequired,
    keys: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  state = {
    modalKeyForm: false,
    key: undefined
  };

  componentDidMount() {
    this.getKeys();
  }

  componentDidUpdate(prevProps) {
    const { dictionaryId } = this.props;

    if (dictionaryId && dictionaryId !== prevProps.dictionaryId) this.getKeys();
  }

  getKeys() {
    const { projectId, dictionaryId } = this.props;

    this.props.getDictionaryKeys({ projectId, dictionaryId });
  }

  handleEditKey(key) {
    this.setState({ key, modalKeyForm: true });
  }

  handleConfirmDelete = (key) => {
    const { projectId, dictionaryId } = this.props;

    if (window.confirm('Are you sure?')) { // eslint-disable-line no-alert
      this.props.deleteDictionaryKey({ projectId, dictionaryId, id: key.id });
    }
  };

  render() {
    const { projectId, dictionaryId, keys } = this.props;
    const { key, modalKeyForm } = this.state;

    return (
      <div>
        <button
          onClick={() => this.setState({ modalKeyForm: true })}
          className="btn btn-outline-primary btn-block btn-lg mb-4"
        >
          Add new key
        </button>
        {modalKeyForm &&
          <ModalKeyForm
            closeModal={() => this.setState({ modalKeyForm: false, key: undefined })}
            projectId={projectId}
            dictionaryId={dictionaryId}
            item={key}
          />
        }

        {keys.length > 0 &&
          <table className="table mb-4">
            <thead className="thead-default">
              <tr>
                <th>Key</th>
                <th>Last Updated</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {keys.map(k => (
                <tr key={k.id}>
                  <th scope="row" className="align-middle">{k.name}</th>
                  <td className="align-middle">{k.updatedAt}</td>
                  <td className="text-right">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => this.handleEditKey(k)}
                    >
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger ml-3" onClick={() => this.handleConfirmDelete(k)}>
                      Delete
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

function mapStateToProps({ projects, keys }) {
  return {
    keys: keys.entriesIds.map(id => keys.entries[id]),
    project: projects.current,
  };
}
export default connect(mapStateToProps, { getDictionaryKeys, deleteDictionaryKey })(DictionaryKeysList);
