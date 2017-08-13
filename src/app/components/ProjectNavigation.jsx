import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router/lib/Link';

class ProjectNavigation extends PureComponent {
  static propTypes = {
    projectId: PropTypes.number.isRequired
  };

  render() {
    const { projectId: id } = this.props;
    return (
      <ul className="nav nav-pills mb-4">
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to={`/projects/${id}/edit`}>Basic</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to={`/projects/${id}/locales`}>Locales</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to={`/projects/${id}/dictionaries`}>Dictionaries</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to={`/projects/${id}/members`}>Members</Link>
        </li>
      </ul>
    );
  }
}

export default ProjectNavigation;
