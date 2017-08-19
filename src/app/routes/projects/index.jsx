import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProjects, deleteProject } from 'redux/projects/actions';
import ProjectCard from 'components/ProjectCard';
import ModalProjectNew from 'components/modals/ProjectNew';

class Projects extends Component {
  static propTypes = {
    getProjects: PropTypes.func.isRequired,
    deleteProject: PropTypes.func.isRequired,
    entries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  state = {
    modalProjectNew: false,
  };

  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const { entries } = this.props;
    const { modalProjectNew } = this.state;

    if (entries.length === 0) {
      return (
        <div>
          <div className="jumbotron text-center">
            <h1 className="display-3">Meow!</h1>
            <hr className="my-4" />
            <p className="lead">Create your first project!</p>
            <p className="lead">
              <button className="btn btn-primary btn-lg" onClick={() => this.setState({ modalProjectNew: true })}>
                Create
              </button>
            </p>
          </div>
          {modalProjectNew && <ModalProjectNew closeModal={() => this.setState({ modalProjectNew: false })} />}
        </div>
      );
    }

    return (
      <div>
        {entries.map(p => <ProjectCard project={p} key={p.id} onDelete={this.props.deleteProject} />)}
      </div>
    );
  }
}

function mapStateToProps({ projects }) {
  return {
    entries: projects.entries
  };
}

export default connect(mapStateToProps, { getProjects, deleteProject })(Projects);
