import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import { createProject } from 'redux/projects/actions';

class ModalProjectNew extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
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
        this.props.createProject(values)
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
    const nameError = getFieldError('name');
    const descError = getFieldError('desc');
    const formErros = getFieldError('__');

    return (
      <Modal
        className="b-modal b-modal_size_small"
        contentLabel="ModalSignup"
        onRequestClose={this.props.closeModal}
        isOpen
      >
        CREATE NEW PROJECT
        <div>
          {formErros && <p className="test">{formErros.join(', ')}</p>}
          <input
            {...getFieldProps('name', {
              // onChange(){}, // have to write original onChange here if you need
              rules: [{ required: true }],
            })}
            placeholder="Name"
          />
          {nameError && nameError.join(',')}
          <input
            {...getFieldProps('desc', {
              // onChange(){}, // have to write original onChange here if you need
              rules: [],
            })}
            placeholder="Description"
          />
          {descError && descError.join(',')}
          <button onClick={this.submit}>create</button>
        </div>
      </Modal>
    );
  }
}


export default connect(null, { createProject })(createForm()(ModalProjectNew));
