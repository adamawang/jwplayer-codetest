import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="project-title">JW Player Code Test</h1>
        {this.props.children}
      </div>
    )
  }
}
