import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import { createDictionaryKey, updateDictionaryKey } from 'redux/keys/actions';

class ModalKeyForm extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    projectId: PropTypes.number.isRequired,
    dictionaryId: PropTypes.number.isRequired,
    item: PropTypes.shape({}),
    updateDictionaryKey: PropTypes.func.isRequired,
    createDictionaryKey: PropTypes.func.isRequired,
    form: PropTypes.shape({
      validateFields: PropTypes.func.isRequired,
      getFieldProps: PropTypes.func.isRequired,
      getFieldError: PropTypes.func.isRequired,
      setFields: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    item: undefined,
  };

  handleSubmit = () => {
    const { item, projectId, dictionaryId } = this.props;

    this.props.form.validateFields((error, values) => {
      if (!error) {
        const action = item ? this.props.updateDictionaryKey : this.props.createDictionaryKey;
        const params = { ...values, projectId, dictionaryId };

        if (item) {
          params.id = item.id;
        }

        action(params)
          .then(() => this.props.closeModal())
          .catch((err) => {
            this.props.form.setFields({
              __: {
                errors: [new Error(err.data.name)],
              },
            });
          });
      }
    });
  };

  render() {
    const { item, form: { getFieldProps, getFieldError } } = this.props;
    const nameError = getFieldError('name');
    const formErros = getFieldError('__');

    return (
      <Modal
        className="b-modal b-modal_size_small"
        contentLabel="ModalDictionaryForm"
        onRequestClose={this.props.closeModal}
        isOpen
      >
        Add new key
        <div>
          {formErros && <p className="test">{formErros.join(', ')}</p>}
          <div className="form-group">
            <label htmlFor="dictKey">Key</label>
            <input
              {...getFieldProps('name', {
                rules: [{ required: true }],
                initialValue: item ? item.name : ''
              })}
              id="dictKey"
              className="form-control"
              placeholder="ABOUT"
            />
            {nameError && nameError.join(',')}
          </div>
          <button onClick={this.handleSubmit} className="btn btn-primary">Save</button>
        </div>
      </Modal>
    );
  }
}


export default connect(null, {
  createDictionaryKey,
  updateDictionaryKey
})(createForm()(ModalKeyForm));
