import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router/lib/Link';

import ModalDictionaryForm from 'components/modals/DictionaryForm';

class DictionariesNavigation extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    projectId: PropTypes.number.isRequired,
    localeId: PropTypes.number.isRequired,
    // dictionaryId: PropTypes.string,
  };

  state = {
    modalDictionaryForm: false,
  };

  render() {
    const { items, projectId, localeId } = this.props;
    const { modalDictionaryForm } = this.state;

    return (
      <div>
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={() => this.setState({ modalDictionaryForm: true })}
        >
          Add Dictionary +
        </button>

        <ul className="list-group mt-2">
          {items.map(d => (
            <Link
              to={`/projects/${projectId}/locales/${localeId}/dictionaries/${d.id}`}
              className="list-group-item"
              activeClassName="active"
              key={d.id}
            >
              {d.name}
            </Link>
          ))}
        </ul>
        {modalDictionaryForm &&
          <ModalDictionaryForm
            closeModal={() => this.setState({ modalDictionaryForm: false })}
            projectId={projectId}
          />
        }
      </div>

    );
  }
}

export default DictionariesNavigation;
