import React, { Component } from 'react';

import ModalLogin from 'components/ModalLogin';
import ModalSignup from 'components/ModalSignup';
import ModalProjectNew from 'components/ModalProjectNew';

class Header extends Component {
  state = {
    modalProjectNew: false,
    modalLogin: false,
    modalSignup: false
  };

  render() {
    const { modalLogin, modalSignup, modalProjectNew } = this.state;

    return (
      <nav className="navbar navbar-inverse bg-inverse p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="navbar-brand">
                <p className="h3 m-0 test">l10n Lion!</p>
              </div>
            </div>
            <div className="col-md-3 text-info text-center mt-1">
              Hello Kitty!
            </div>
            <div className="col-md-6 text-md-right">
              <button
                className="btn btn-outline-info ml-3"
                onClick={() => this.setState({ modalProjectNew: true })}
                type="submit"
              >Add Project</button>
              <button
                className="btn btn-outline-info ml-3"
                onClick={() => this.setState({ modalLogin: true })}
              >Log In</button>
              <button
                className="btn btn-outline-info ml-3"
                onClick={() => this.setState({ modalSignup: true })}
                type="submit"
              >Sign Up</button>
            </div>
            {modalLogin && <ModalLogin closeModal={() => this.setState({ modalLogin: false })} />}
            {modalSignup && <ModalSignup closeModal={() => this.setState({ modalSignup: false })} />}
            {modalProjectNew && <ModalProjectNew closeModal={() => this.setState({ modalProjectNew: false })} />}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
