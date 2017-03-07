import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img className="project-logo" src="../../icons/logo.svg" alt="test logo" />
        </div>
        {this.props.children}
      </div>
    )
  }
}
