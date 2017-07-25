import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import { signUp } from 'redux/user/actions';

class ModalSignup extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
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
        this.props.signUp(values).catch((err) => {
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
    const emailError = getFieldError('email');
    const passwordError = getFieldError('password');
    const formErros = getFieldError('__');

    return (
      <Modal
        className="b-modal b-modal_size_small"
        contentLabel="ModalSignup"
        onRequestClose={this.props.closeModal}
        isOpen
      >
        REGISTRATION
        <div>
          {formErros && <p className="test">{formErros.join(', ')}</p>}
          <input
            {...getFieldProps('email', {
              // onChange(){}, // have to write original onChange here if you need
              rules: [{ required: true }],
            })}
          />
          {emailError && emailError.join(',')}
          <input
            {...getFieldProps('password', {
              // onChange(){}, // have to write original onChange here if you need
              rules: [{ required: true }],
            })}
          />
          {passwordError && passwordError.join(',')}
          <button onClick={this.submit}>submit</button>
        </div>
      </Modal>
    );
  }
}


export default connect(null, { signUp })(createForm()(ModalSignup));
// export default ModalLogin;
