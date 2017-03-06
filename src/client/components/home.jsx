import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { videoData } from '../actions/actions';

class Home extends Component {
  componentDidMount() {
    this.videoData();
  }
  componentDidUpdate() {
    console.log("props in component: ", this.props)
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    video: state.video,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ videoData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Keys);
