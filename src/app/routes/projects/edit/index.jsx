import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router/lib/Link';
// import { connect } from 'react-redux';
import ProjectNavigation from 'components/ProjectNavigation';

class ProjectEdit extends Component {
  static propTypes = {
    children: PropTypes.node,
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired
    }).isRequired,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { params, children } = this.props;

    return (
      <div>
        <ProjectNavigation projectId={Number(params.projectId)} />
        {children}
        <hr />
        <Link to="/projects" className="btn btn-primary">Back to projects</Link>
      </div>
    );
  }
}

export default ProjectEdit;
