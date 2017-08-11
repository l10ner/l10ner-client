import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { createForm } from 'rc-form';

import { connect } from 'react-redux';
import { updateProject } from 'redux/projects/actions';
import ProjectEditForm from 'components/forms/ProjectEdit';

class ProjectEdit extends Component {
  static propTypes = {
    project: PropTypes.shape({}).isRequired,
    updateProject: PropTypes.func.isRequired
  };

  render() {
    const { project } = this.props;

    return (
      <div>
        <h3>Basic</h3>
        <ProjectEditForm project={project} onUpdateProject={this.props.updateProject} />
      </div>
    );
  }
}


function mapStateToProps({ projects }) {
  return {
    project: projects.current
  };
}
export default connect(mapStateToProps, { updateProject })(ProjectEdit);
