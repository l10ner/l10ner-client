import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createForm } from 'rc-form';

import ModalDictionaryForm from 'components/modals/DictionaryForm';

class DictionaryListItem extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    item: PropTypes.shape({
      // name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      // desc: PropTypes.string,
      // default_locale: PropTypes.number,
    }).isRequired,
  };

  state = {
    modalDictionaryForm: false
  };


  handleConfirmDelete = () => {
    if (window.confirm('Are you sure?')) this.props.onDelete(this.props.item.id); // eslint-disable-line no-alert
  };

  render() {
    const { item } = this.props;
    const { modalDictionaryForm } = this.state;

    return (
      <tr>
        <td className="align-middle">{item.name}</td>
        <td className="align-middle">{item.desc}</td>
        <td className="text-right">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.setState({ modalDictionaryForm: true })}
          >
            Edit
          </button>
          <button type="button" className="btn btn-danger ml-3" onClick={this.handleConfirmDelete}>Delete</button>
        </td>
        {modalDictionaryForm &&
          <ModalDictionaryForm closeModal={() => this.setState({ modalDictionaryForm: false })} dictionary={item} />
        }
      </tr>
    );
  }
}

export default createForm()(DictionaryListItem);
