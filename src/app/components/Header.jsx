import React, { Component } from 'react';

class Header extends Component {
  render() {
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
              <button className="btn btn-outline-info ml-3" type="submit">Add Project</button>
              <button className="btn btn-outline-info ml-3" type="submit">Log In</button>
              <button className="btn btn-outline-info ml-3" type="submit">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
