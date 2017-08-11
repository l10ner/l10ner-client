import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createForm } from 'rc-form';

import ModalLocaleEdit from 'components/modals/LocaleNew';

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
    modalLocaleEdit: false
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
    const { locale, isDefault } = this.props;
    const { modalLocaleEdit } = this.state;

    return (
      <tr className={isDefault ? 'table-info' : ''}>
        <td className="align-middle">{locale.key}</td>
        <td className="align-middle">{locale.label}</td>
        <td className="text-right">
          <button type="button" className="btn btn-primary" onClick={() => this.setState({ modalLocaleEdit: true })}>
            Edit
          </button>
          <button type="button" className="btn btn-danger ml-3" onClick={this.handleConfirmDelete}>Delete</button>
        </td>
        {modalLocaleEdit &&
          <ModalLocaleEdit closeModal={() => this.setState({ modalLocaleEdit: false })} locale={locale} />
        }
      </tr>
    );
  }
}

export default createForm()(LocaleTableItem);
