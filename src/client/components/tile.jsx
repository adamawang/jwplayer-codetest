import React, { Component } from 'react';

class Tile extends Component {
  componentDidMount() {
    console.log("props in tile: ", this.props);
  }

  render() {
    const imageStyle = {
      width: '300px'
    }
    return (
      <div>
        <img style={imageStyle} src={`http:${this.props.props.image}`} />
        <p>{this.props.props.title}</p>
      </div>
    )
  }
}

export default Tile;
