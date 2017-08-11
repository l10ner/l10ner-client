import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createForm } from 'rc-form';

class LocaleTableItem extends Component {
  static propTypes = {
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    isDefault: PropTypes.bool.isRequired,
    locale: PropTypes.shape({
      // name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      // desc: PropTypes.string,
      // default_locale: PropTypes.number,
    }).isRequired,
    form: PropTypes.shape({
      validateFields: PropTypes.func.isRequired,
      getFieldProps: PropTypes.func.isRequired,
      setFields: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    isEditMode: false
  };

  // componentWillReceiveProps() {
  //   this.setState({
  //     isEditMode: false
  //   });
  // }
  // handleEdit = (e) => {
  //   console.log(e);
  //   e.preventDefault();
  //   console.log(this.props.locale);
  //   this.setState({
  //     isEditMode: true
  //   });
  // };
  //
  // handleCancelEdit = () => {
  //   this.setState({
  //     isEditMode: false
  //   });
  // };

  handleConfirmDelete = () => {
    if (window.confirm('Are you sure?')) this.props.onDelete(this.props.locale.id); // eslint-disable-line no-alert
  };

  handleSave = () => {
    this.props.form.validateFields((error, values) => {
      if (!error) {
        this.props.onUpdate({
          ...values,
          id: this.props.locale.id
        })
          .then(() => {
            this.setState({
              isEditMode: false
            });
          })
          .catch((err) => {
            console.log(err);
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
    const { locale, isDefault, form: { getFieldProps } } = this.props;
    const { isEditMode } = this.state;

    return (
      <tr className={isDefault ? 'table-info' : ''}>
        <td className="align-middle">{isEditMode ?
          <input
            {...getFieldProps('key', {
              rules: [{ required: true }],
              initialValue: locale.key,
            })}
            id="localeKey"
            className="form-control"
            placeholder="en"
          />
          : locale.key}</td>
        <td className="align-middle">{isEditMode ?
          <input
            {...getFieldProps('label', {
              rules: [{ required: true }],
              initialValue: locale.label,
            })}
            className="form-control"
            id="localeLabel"
            placeholder="English"
          />
          : locale.label}</td>
        {isEditMode ?
          <td className="text-right">
            <button type="button" className="btn btn-primary ml-3" onClick={this.handleSave}>Save</button>
            <button type="button" className="btn btn-danger ml-3" onClick={() => this.setState({ isEditMode: false })}>
              Cancel
            </button>
          </td>
          :
          <td className="text-right">
            <button type="button" className="btn btn-primary ml-3" onClick={() => this.setState({ isEditMode: true })}>
              Edit
            </button>
            <button type="button" className="btn btn-danger ml-3" onClick={this.handleConfirmDelete}>Delete</button>
          </td>
        }
      </tr>
    );
  }
}

export default createForm()(LocaleTableItem);
