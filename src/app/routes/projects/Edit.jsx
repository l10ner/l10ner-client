import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { createForm } from 'rc-form';

import { connect } from 'react-redux';
import { updateProject } from 'redux/projects/actions';
import ProjectEditForm from 'components/forms/ProjectEdit';

class ProjectEdit extends Component {
  static propTypes = {
    project: PropTypes.shape({}).isRequired,
    locales: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    updateProject: PropTypes.func.isRequired
  };

  render() {
    const { project, locales } = this.props;

    return (
      <div>
        <h3>Basic</h3>
        <ProjectEditForm project={project} locales={locales} onUpdateProject={this.props.updateProject} />
      </div>
    );
  }
}


function mapStateToProps({ projects, locales }) {
  return {
    project: projects.current,
    locales: locales.entriesIds.map(id => locales.entries[id]),
  };
}
export default connect(mapStateToProps, { updateProject })(ProjectEdit);
