import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProjects } from 'redux/projects/actions';

class Home extends Component {
  // static propTypes = {
  //   getProjects: PropTypes.func.isRequired,
  //   entries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  // };
  //
  // componentDidMount() {
  //   this.props.getProjects();
  // }
  render() {
    return (
      <div>
        тут формы логина/реги<br />
        а если есть сессия то надо редиректить на проекты
      </div>
    );
  }
}

function mapStateToProps({ projects }) {
  return {
    entries: projects.entries
  };
}

export default connect(mapStateToProps, { getProjects })(Home);
