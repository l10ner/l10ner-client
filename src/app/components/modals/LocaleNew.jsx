import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import { createLocale, updateLocale } from 'redux/locales/actions';

class ModalLocaleNew extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    projectId: PropTypes.number,
    locale: PropTypes.shape({}),
    createLocale: PropTypes.func.isRequired,
    updateLocale: PropTypes.func.isRequired,
    form: PropTypes.shape({
      validateFields: PropTypes.func.isRequired,
      getFieldProps: PropTypes.func.isRequired,
      getFieldError: PropTypes.func.isRequired,
      setFields: PropTypes.func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    projectId: undefined,
    locale: undefined,
  };

  handleSubmit = () => {
    const { locale, projectId } = this.props;

    this.props.form.validateFields((error, values) => {
      if (!error) {
        const action = locale ? this.props.updateLocale : this.props.createLocale;
        const params = locale ? [{ ...values, id: locale.id }] : [projectId, values];

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
    const { locale, form: { getFieldProps, getFieldError } } = this.props;
    const keyError = getFieldError('key');
    const labelError = getFieldError('label');
    const formErros = getFieldError('__');

    return (
      <Modal
        className="b-modal b-modal_size_small"
        contentLabel="ModalLocaleNew"
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
                initialValue: locale ? locale.key : ''
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
                initialValue: locale ? locale.label : ''
              })}
              className="form-control"
              id="localeLabel"
              placeholder="English"
            />
            {labelError && labelError.join(',')}
          </div>
          <button onClick={this.handleSubmit} className="btn btn-primary">Save</button>
        </div>
      </Modal>
    );
  }
}


export default connect(null, { createLocale, updateLocale })(createForm()(ModalLocaleNew));
