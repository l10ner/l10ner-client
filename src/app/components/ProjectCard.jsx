import React, { Component } from 'react';
import Link from 'react-router/lib/Link';

import PropTypes from 'prop-types';

class ProjectCard extends Component {
  static propTypes = {
    project: PropTypes.shape({
      name: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
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
          <Link to={`/project/${id}`} className="btn btn-primary mr-2">Перейти</Link>
          <Link to={`/project/${id}/edit`} className="btn btn-primary mr-2">Редактировать</Link>
          <a href="#" className="btn btn-primary mr-2">Удалить</a>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
