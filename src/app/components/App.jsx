import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';

class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
