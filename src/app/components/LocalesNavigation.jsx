import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router/lib/Link';

class LocalesNavigation extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    projectId: PropTypes.number.isRequired,
    dictionaryId: PropTypes.string,
  };

  static defaultProps = {
    dictionaryId: ''
  };

  render() {
    const { items, projectId, dictionaryId } = this.props;

    return (
      <div>
        <ul className="nav nav-pills mb-4">
          {items.map(l => (
            <li className="nav-item" key={l.id}>
              <Link
                to={`/projects/${projectId}/locales/${l.id}/dictionaries/${dictionaryId}`}
                className="nav-link"
                activeClassName="active"
                key={l.id}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    );
  }
}

export default LocalesNavigation;
