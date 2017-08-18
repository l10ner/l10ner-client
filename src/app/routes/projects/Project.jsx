import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProject, dropProjectData } from 'redux/projects/actions';


class Project extends Component {
  static propTypes = {
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired
    }).isRequired,
    getProject: PropTypes.func.isRequired,
    dropProjectData: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  componentDidMount() {
    this.getProjectData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.projectId !== prevProps.params.projectId) this.getProjectData();
  }

  componentWillUnmount() {
    this.props.dropProjectData();
  }

  getProjectData() {
    this.props.getProject(this.props.params.projectId);
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default connect(null, { getProject, dropProjectData })(Project);
