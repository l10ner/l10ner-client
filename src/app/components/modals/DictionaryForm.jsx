import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import { createDictionary, updateDictionary } from 'redux/projects/actions';

class ModalDictionaryForm extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    projectId: PropTypes.number,
    dictionary: PropTypes.shape({}),
    createDictionary: PropTypes.func.isRequired,
    updateDictionary: PropTypes.func.isRequired,
    form: PropTypes.shape({
      validateFields: PropTypes.func.isRequired,
      getFieldProps: PropTypes.func.isRequired,
      getFieldError: PropTypes.func.isRequired,
      setFields: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    projectId: undefined,
    dictionary: undefined,
  };

  handleSubmit = () => {
    const { dictionary, projectId } = this.props;

    this.props.form.validateFields((error, values) => {
      if (!error) {
        const action = dictionary ? this.props.updateDictionary : this.props.createDictionary;
        const params = dictionary ? [{ ...values, id: dictionary.id }] : [projectId, values];

        action(...params)
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
    const { dictionary, form: { getFieldProps, getFieldError } } = this.props;
    const nameError = getFieldError('name');
    const descError = getFieldError('desc');
    const formErros = getFieldError('__');

    return (
      <Modal
        className="b-modal b-modal_size_small"
        contentLabel="ModalDictionaryForm"
        onRequestClose={this.props.closeModal}
        isOpen
      >
        Add new dictionary
        <div>
          {formErros && <p className="test">{formErros.join(', ')}</p>}
          <div className="form-group">
            <label htmlFor="nameKey">Name</label>
            <input
              {...getFieldProps('name', {
                rules: [{ required: true }],
                initialValue: dictionary ? dictionary.name : ''
              })}
              id="nameKey"
              className="form-control"
              placeholder="profile"
            />
            {nameError && nameError.join(',')}
          </div>
          <div className="form-group">
            <label htmlFor="descLabel">Description</label>
            <input
              {...getFieldProps('desc', {
                rules: [{ required: true }],
                initialValue: dictionary ? dictionary.desc : ''
              })}
              className="form-control"
              id="descLabel"
              placeholder="profile pages"
            />
            {descError && descError.join(',')}
          </div>
          <button onClick={this.handleSubmit} className="btn btn-primary">Save</button>
        </div>
      </Modal>
    );
  }
}


export default connect(null, { createDictionary, updateDictionary })(createForm()(ModalDictionaryForm));
