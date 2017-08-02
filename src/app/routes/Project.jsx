import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class Project extends Component {
  // static propTypes = {
  //   getProjects: PropTypes.func.isRequired,
  // };

  render() {
    return (
      <div>
        <h3>Project</h3>
        <div>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Project;
