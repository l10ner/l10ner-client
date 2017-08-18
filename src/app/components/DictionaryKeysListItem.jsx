import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { createForm } from 'rc-form';

// import ModalKeyValueForm from 'components/modals/KeyValueForm';

class DictionaryKeysListItem extends Component {
  static propTypes = {
    isDefaultLocale: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    item: PropTypes.shape({
      // name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      // desc: PropTypes.string,
    }).isRequired,
  };

  state = {
    modalKeyValueForm: false
  };


  handleConfirmDelete = () => {
    if (window.confirm('Are you sure?')) this.props.onDelete(this.props.item.id); // eslint-disable-line no-alert
  };

  render() {
    const { item, isDefaultLocale } = this.props;

    return (
      <tr key={item.id}>
        <th scope="row" className="align-middle">{item.name}</th>
        <td className="align-middle">{item.value ? item.value.value : '-'}</td>
        <td className="align-middle">{item.value ? item.value.updatedAt : '-'}</td>
        <td className="text-right">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.props.onEdit(item)}
          >
            Edit
          </button>
          {isDefaultLocale &&
            <button type="button" className="btn btn-danger ml-3" onClick={this.handleConfirmDelete}>Delete</button>
          }
        </td>
      </tr>
    );
  }
}

export default DictionaryKeysListItem;
