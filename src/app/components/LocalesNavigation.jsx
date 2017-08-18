import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';

class LocalesNavigation extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    projectId: PropTypes.number.isRequired,
    dictionaryId: PropTypes.number,
  };

  static defaultProps = {
    dictionaryId: ''
  };

  render() {
    const { items, projectId, dictionaryId } = this.props;

    return (
      <div>
        <ul className="nav nav-pills mb-4">
          <li className="nav-item">
            <IndexLink
              to={`/projects/${projectId}/dictionaries/${dictionaryId}`}
              className="nav-link"
              activeClassName="active"
            >
              Keys
            </IndexLink>
          </li>
          {items.map(l => (
            <li className="nav-item" key={l.id}>
              <Link
                to={`/projects/${projectId}/dictionaries/${dictionaryId}/locales/${l.id}`}
                className="nav-link"
                activeClassName="active"
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
