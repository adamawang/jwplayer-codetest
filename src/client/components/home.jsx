import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Jumbo from './jumbo-carousel';
import Carousel from './carousel';

import { videoData } from '../actions/actions';

class Home extends Component {
  componentDidMount() {
    this.props.videoData();
  }

  componentDidUpdate() {
    // console.log("props in component: ", this.props)
  }

  render() {
    if(!this.props.video.data){
      return <div>Loading Video Data</div>
    }
    const carousel = {
      margin: '20px'
    }
    const videoProps = this.props.video.data.playlist;
    return (
      <div>
        <div>
          <Jumbo props={videoProps.slice(0,6)} />
        </div>
        <br />
        <div>
          <Carousel props={videoProps.slice(6,11)} title={"Documentaries"} />
          <hr />
          <Carousel props={videoProps.slice(11,16)} title={"Live Events"} />
          <hr />
          <Carousel props={videoProps.slice(16,22)} title={"Short Films"} />
          <hr />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
