import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { createForm } from 'rc-form';


class DictionaryKeys extends Component {
  // static propTypes = {
  //   onDelete: PropTypes.func.isRequired,
  //   isDefault: PropTypes.bool.isRequired,
  //   locale: PropTypes.shape({
  //     // name: PropTypes.string.isRequired,
  //     id: PropTypes.number.isRequired,
  //     // desc: PropTypes.string,
  //     // default_locale: PropTypes.number,
  //   }).isRequired,
  // };
  //
  // state = {
  //   modalLocaleEdit: false
  // };
  //
  //
  // handleConfirmDelete = () => {
  //   if (window.confirm('Are you sure?')) this.props.onDelete(this.props.locale.id); // eslint-disable-line no-alert
  // };

  render() {
    // const { locale, isDefault } = this.props;
    // const { modalLocaleEdit } = this.state;

    return (
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
    );
  }
}

export default createForm()(DictionaryKeys);
