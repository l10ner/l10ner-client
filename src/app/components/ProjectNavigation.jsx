import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';

class ProjectNavigation extends PureComponent {
  static propTypes = {
    projectId: PropTypes.number.isRequired
  };

  render() {
    const { projectId: id } = this.props;
    return (
      <ul className="nav nav-pills mb-4">
        <li className="nav-item">
          <IndexLink className="nav-link" activeClassName="active" to={`/projects/${id}/edit`}>Basic</IndexLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to={`/projects/${id}/edit/locales`}>Locales</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to={`/projects/${id}/edit/dictionaries`}>
            Dictionaries
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to={`/projects/${id}/edit/members`}>Members</Link>
        </li>
      </ul>
    );
  }
}

export default ProjectNavigation;
