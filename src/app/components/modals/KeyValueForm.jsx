import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import { createDictionaryPair, createOrUpdateDictionaryValue } from 'redux/projects/actions';

class ModalKeyValueForm extends Component {
  static propTypes = {
    isDefaultLocale: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    projectId: PropTypes.number.isRequired,
    localeId: PropTypes.number.isRequired,
    dictionaryId: PropTypes.number.isRequired,
    pair: PropTypes.shape({}),
    createDictionaryPair: PropTypes.func.isRequired,
    createOrUpdateDictionaryValue: PropTypes.func.isRequired,
    form: PropTypes.shape({
      validateFields: PropTypes.func.isRequired,
      getFieldProps: PropTypes.func.isRequired,
      getFieldError: PropTypes.func.isRequired,
      setFields: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    isDefaultLocale: false,
    // projectId: undefined,
    // localeId: undefined,
    // dictionaryId: undefined,
    pair: undefined,
  };

  handleSubmit = () => {
    const { pair, projectId, localeId, dictionaryId } = this.props;

    this.props.form.validateFields((error, values) => {
      if (!error) {
        const action = pair ? this.props.createOrUpdateDictionaryValue : this.props.createDictionaryPair;
        const params = { ...values, projectId, localeId, dictionaryId };

        if (pair) {
          params.keyId = pair.id;

          if (pair.value) {
            params.id = pair.value.id;
          }
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
    const { pair, form: { getFieldProps, getFieldError }, isDefaultLocale } = this.props;
    const nameError = getFieldError('name');
    const valueError = getFieldError('value');
    const commentError = getFieldError('comment');
    const formErros = getFieldError('__');

    return (
      <Modal
        className="b-modal b-modal_size_small"
        contentLabel="ModalDictionaryForm"
        onRequestClose={this.props.closeModal}
        isOpen
      >
        Add new key/value pair
        <div>
          {formErros && <p className="test">{formErros.join(', ')}</p>}
          <div className="form-group">
            <label htmlFor="dictKey">Key</label>
            <input
              {...getFieldProps('name', {
                rules: [{ required: true }],
                initialValue: pair ? pair.name : ''
              })}
              id="dictKey"
              className="form-control"
              placeholder="profile"
              readOnly={pair && !isDefaultLocale}
            />
            {nameError && nameError.join(',')}
          </div>
          <div className="form-group">
            <label htmlFor="dictValue">Value</label>
            <input
              {...getFieldProps('value', {
                // rules: [{ required: true }],
                initialValue: pair && pair.value ? pair.value.value : ''
              })}
              className="form-control"
              id="dictValue"
              placeholder="profile pages"
            />
            {valueError && valueError.join(',')}
          </div>
          <div className="form-group">
            <label htmlFor="dictComment">Comment</label>
            <input
              {...getFieldProps('comment', {
                // rules: [{ required: true }],
                initialValue: pair && pair.value ? pair.value.comment : ''
              })}
              className="form-control"
              id="dictComment"
              placeholder="profile pages"
            />
            {commentError && commentError.join(',')}
          </div>
          <button onClick={this.handleSubmit} className="btn btn-primary">Save</button>
        </div>
      </Modal>
    );
  }
}


export default connect(null, {
  createDictionaryPair,
  createOrUpdateDictionaryValue
})(createForm()(ModalKeyValueForm));
