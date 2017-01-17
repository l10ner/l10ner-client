import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

class App extends Component {
  render() {
    return (<div>
      <nav className="navbar navbar-inverse bg-inverse p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="navbar-brand">
                <p className="h3 m-0">l10n Lion</p>
              </div>
            </div>
            <div className="col-md-3 text-info text-center mt-1">
              Hello Kitty!
            </div>
            <div className="col-md-6 text-md-right">
              <button className="btn btn-outline-info ml-3" type="submit">Add Project</button>
              <button className="btn btn-outline-info ml-3" type="submit">Log Im</button>
              <button className="btn btn-outline-info ml-3" type="submit">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
              <li className="list-group-item active">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Morbi leo risus</li>
            </ul>
          </div>
          <div className="col-sm-9">
            <ul className="nav nav-pills mb-4">
              <li className="nav-item">
                <a className="nav-link active" href="/">RU</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">EN</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">TH</a>
              </li>
            </ul>
            <table className="table mb-4">
              <thead className="thead-default">
                <tr>
                  <th>Key</th>
                  <th>Value</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="align-middle">cart</th>
                  <td className="align-middle">Mark</td>
                  <td className="align-middle">Otto</td>
                  <td className="text-right">
                    <button type="button" className="btn btn btn-outline-info ml-3">Key</button>
                    <button type="button" className="btn btn-info ml-3">Info</button>
                    <button type="button" className="btn btn-primary ml-3">Edit</button>
                    <button type="button" className="btn btn-danger ml-3">Delet</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle">cart</th>
                  <td className="align-middle">Mark</td>
                  <td className="align-middle">Otto</td>
                  <td className="text-right">
                    <button type="button" className="btn btn btn-outline-info ml-3">Key</button>
                    <button type="button" className="btn btn-info ml-3">Info</button>
                    <button type="button" className="btn btn-primary ml-3">Edit</button>
                    <button type="button" className="btn btn-danger ml-3">Delet</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle">cart</th>
                  <td className="align-middle">Mark</td>
                  <td className="align-middle">Otto</td>
                  <td className="text-right">
                    <button type="button" className="btn btn btn-outline-info ml-3">Key</button>
                    <button type="button" className="btn btn-info ml-3">Info</button>
                    <button type="button" className="btn btn-primary ml-3">Edit</button>
                    <button type="button" className="btn btn-danger ml-3">Delet</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle">cart</th>
                  <td className="align-middle">Mark</td>
                  <td className="align-middle">Otto</td>
                  <td className="text-right">
                    <button type="button" className="btn btn btn-outline-info ml-3">Key</button>
                    <button type="button" className="btn btn-info ml-3">Info</button>
                    <button type="button" className="btn btn-primary ml-3">Edit</button>
                    <button type="button" className="btn btn-danger ml-3">Delet</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="align-middle">cart</th>
                  <td className="align-middle">Mark</td>
                  <td className="align-middle">Otto</td>
                  <td className="text-right">
                    <button type="button" className="btn btn btn-outline-info ml-3">Key</button>
                    <button type="button" className="btn btn-info ml-3">Info</button>
                    <button type="button" className="btn btn-primary ml-3">Edit</button>
                    <button type="button" className="btn btn-danger ml-3">Delet</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="button" className="btn btn-primary mr-3">Import</button>
            <button type="button" className="btn btn-primary">Export</button>
            {this.props.children}
          </div>
        </div>
      </div>
    </div>);
  }
}

export default App;
