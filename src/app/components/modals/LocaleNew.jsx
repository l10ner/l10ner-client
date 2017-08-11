import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import { createLocale } from 'redux/projects/actions';

class ModalLocaleNew extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    projectId: PropTypes.number.isRequired,
    createLocale: PropTypes.func.isRequired,
    form: PropTypes.shape({
      validateFields: PropTypes.func.isRequired,
      getFieldProps: PropTypes.func.isRequired,
      getFieldError: PropTypes.func.isRequired,
      setFields: PropTypes.func.isRequired,
    }).isRequired,
  };

  submit = () => {
    this.props.form.validateFields((error, values) => {
      if (!error) {
        this.props.createLocale(this.props.projectId, values)
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
    const { getFieldProps, getFieldError } = this.props.form;
    const keyError = getFieldError('key');
    const labelError = getFieldError('label');
    const formErros = getFieldError('__');

    return (
      <Modal
        className="b-modal b-modal_size_small"
        contentLabel="ModalSignup"
        onRequestClose={this.props.closeModal}
        isOpen
      >
        Add new locale
        <div>
          {formErros && <p className="test">{formErros.join(', ')}</p>}
          <div className="form-group">
            <label htmlFor="localeKey">Key</label>
            <input
              {...getFieldProps('key', {
                rules: [{ required: true }],
              })}
              id="localeKey"
              className="form-control"
              placeholder="en"
            />
            {keyError && keyError.join(',')}
          </div>
          <div className="form-group">
            <label htmlFor="localeLabel">Label</label>
            <input
              {...getFieldProps('label', {
                rules: [{ required: true }],
              })}
              className="form-control"
              id="localeLabel"
              placeholder="English"
            />
            {labelError && labelError.join(',')}
          </div>
          <button onClick={this.submit} className="btn btn-primary">Save</button>
        </div>
      </Modal>
    );
  }
}


export default connect(null, { createLocale })(createForm()(ModalLocaleNew));
