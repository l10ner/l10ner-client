import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProjects } from 'redux/projects/actions';
import ProjectCard from 'components/ProjectCard';

class Projects extends Component {
  static propTypes = {
    getProjects: PropTypes.func.isRequired,
    entries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const { entries } = this.props;

    return (
      <div>
        {entries.map(p => <ProjectCard project={p} key={p.id} />)}
        <hr />
        кнопка перейти только если проставлен дефолтный язык
        <hr />
        редактировать/удалить видны всегда
        <hr />
        если проектов нет, кнопку с попапом создания проекта
      </div>
    );
  }
}

function mapStateToProps({ projects }) {
  return {
    entries: projects.entries
  };
}

export default connect(mapStateToProps, { getProjects })(Projects);
