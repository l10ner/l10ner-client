import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getProjects } from 'redux/projects/actions';

class Dashboard extends Component {
  static propTypes = {
    getProjects: PropTypes.func.isRequired,
  };

  render() {
    return (<div>
      dashboard!!!!
      <button type="button" className="btn btn-primary mr-3" onClick={this.props.getProjects}>GET_LIST</button>
    </div>);
  }
}

export default connect(null, { getProjects })(Dashboard);
