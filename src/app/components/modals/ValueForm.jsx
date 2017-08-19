import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import { createDictionaryValue, updateDictionaryValue } from 'redux/values/actions';

class ModalValueForm extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    projectId: PropTypes.number.isRequired,
    localeId: PropTypes.number.isRequired,
    dictionaryId: PropTypes.number.isRequired,
    item: PropTypes.shape({}),
    createDictionaryValue: PropTypes.func.isRequired,
    updateDictionaryValue: PropTypes.func.isRequired,
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
    const { item, projectId, localeId, dictionaryId } = this.props;

    this.props.form.validateFields((error, values) => {
      if (!error) {
        const action = item.value ? this.props.updateDictionaryValue : this.props.createDictionaryValue;
        const params = { ...values, projectId, localeId, dictionaryId };

        if (item) {
          params.keyId = item.id;

          if (item.value) {
            params.id = item.value.id;
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
    const { item, form: { getFieldProps, getFieldError } } = this.props;
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
        Update key value
        <div>
          {formErros && <p className="test">{formErros.join(', ')}</p>}
          <div className="form-group">
            <label htmlFor="dictKey">Key</label>
            <input
              id="dictKey"
              value={item.name}
              className="form-control"
              placeholder="profile"
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="dictValue">Value</label>
            <input
              {...getFieldProps('value', {
                // rules: [{ required: true }],
                initialValue: item.value ? item.value.value : ''
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
                initialValue: item.value ? item.value.comment : ''
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
  createDictionaryValue,
  updateDictionaryValue
})(createForm()(ModalValueForm));
