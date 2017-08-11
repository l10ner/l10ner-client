import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router/lib/Link';

class ProjectNavigation extends PureComponent {
  static propTypes = {
    projectId: PropTypes.number.isRequired
  };

  render() {
    const { projectId } = this.props;
    return (
      <ul className="nav nav-pills mb-4">
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to={`/projects/${projectId}/edit`}>Basic</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to={`/projects/${projectId}/locales`}>Locales</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" activeClassName="active" to={`/projects/${projectId}/members`}>Members</Link>
        </li>
      </ul>
    );
  }
}

export default ProjectNavigation;
