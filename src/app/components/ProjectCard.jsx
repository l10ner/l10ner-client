import React, { Component } from 'react';
import Link from 'react-router/lib/Link';

import PropTypes from 'prop-types';

class ProjectCard extends Component {
  static propTypes = {
    project: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      desc: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { name, desc, id } = this.props.project;

    return (
      <div className="card mb-4">
        <div className="card-block">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{desc}</p>
          <Link to={`/projects/${id}`} className="btn btn-primary mr-2">Перейти</Link>
          <Link to={`/projects/${id}/edit`} className="btn btn-secondary mr-2">Редактировать</Link>
          <button className="btn btn-danger mr-2">Удалить</button>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
