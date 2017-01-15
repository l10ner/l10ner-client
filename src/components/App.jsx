import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';


class App extends Component {
    render() {
        return (<div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <div className="nav navbar-nav">
                        <span className="navbar-brand">
                            l10n lion
                            <span className="logo-icon"/>
                        </span>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <p className="test">Hello Kitty!</p>
                        {this.props.children}
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default App;
