import React, { Component } from 'react';
import Link from 'react-router/lib/Link';

import PropTypes from 'prop-types';

class ProjectCard extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    project: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      desc: PropTypes.string,
      default_locale: PropTypes.number,
    }).isRequired,
  };

  handleConfirmDelete = () => {
    if (window.confirm('Are you sure?')) this.props.onDelete(this.props.project.id); // eslint-disable-line no-alert
  };

  render() {
    const { name, desc, id, default_locale: defaultLocale } = this.props.project;

    return (
      <div className="card mb-4">
        <div className="card-block">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{desc}</p>
          {defaultLocale &&
          <Link to={`/projects/${id}`} className="btn btn-primary mr-2">Open</Link>
          }
          <Link to={`/projects/${id}/edit`} className="btn btn-secondary mr-2">Edit</Link>
          <button className="btn btn-danger mr-2" onClick={this.handleConfirmDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
