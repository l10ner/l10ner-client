import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class ProjectEdit extends Component {
  // static propTypes = {
  //   getProjects: PropTypes.func.isRequired,
  // };

  render() {
    return (
      <div>
        <h3>ProjectEdit</h3>
        таблица с языками проекта
        <hr />
        форма добавления языка(key/label)
        <hr />
        выбор дефолтного языка проекта
        <hr />
        редактирование имени/описания проекта
        <hr />
      </div>
    );
  }
}


export default ProjectEdit;
