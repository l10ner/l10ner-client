import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IndexLink from 'react-router/lib/IndexLink';
import { connect } from 'react-redux';

import { logOut } from 'redux/user/actions';

import ModalLogin from 'components/modals/Login';
import ModalSignup from 'components/modals/Signup';
import ModalProjectNew from 'components/modals/ProjectNew';

class Header extends Component {
  static propTypes = {
    logOut: PropTypes.func.isRequired,
    logged: PropTypes.bool.isRequired,
    username: PropTypes.string,
  };

  static defaultProps = {
    username: ''
  };

  state = {
    modalProjectNew: false,
    modalLogin: false,
    modalSignup: false
  };

  renderUserActions() {
    return (
      <div className="col-md-6 text-md-right">
        <button
          className="btn btn-outline-info ml-3"
          onClick={() => this.setState({ modalProjectNew: true })}
          type="submit"
        >Add Project</button>
        <button
          className="btn btn-outline-info ml-3"
          onClick={() => this.props.logOut()}
          type="submit"
        >Log Out</button>
      </div>
    );
  }

  renderGuestActions() {
    return (
      <div className="col-md-6 text-md-right">
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
    );
  }

  render() {
    const { logged, username } = this.props;
    const { modalLogin, modalSignup, modalProjectNew } = this.state;

    return (
      <nav className="navbar navbar-inverse bg-inverse p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="navbar-brand">
                <IndexLink to="/" className="h3 m-0">l10n Lion!</IndexLink>
              </div>
            </div>
            <div className="col-md-3 text-info text-center mt-1">
              {logged && `Hello ${username}!`}
            </div>
            {logged ? this.renderUserActions() : this.renderGuestActions() }
            {modalLogin && <ModalLogin closeModal={() => this.setState({ modalLogin: false })} />}
            {modalSignup && <ModalSignup closeModal={() => this.setState({ modalSignup: false })} />}
            {modalProjectNew && <ModalProjectNew closeModal={() => this.setState({ modalProjectNew: false })} />}
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    logged: user.logged,
    username: user.username
  };
}

export default connect(mapStateToProps, { logOut })(Header);
