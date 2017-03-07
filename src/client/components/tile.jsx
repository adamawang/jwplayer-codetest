import React, { Component } from 'react';

class Tile extends Component {
  componentDidMount() {
    // console.log("props in tile: ", this.props);
  }

  render() {
    const imageStyle = {
      width: '300px',
    }
    return (
      <div className="container-tile">
        <div className="image-div">
          <img style={imageStyle} src={`http:${this.props.props.image}`} />
          <div className="text-title">{this.props.props.title}</div>
        </div>
        <div className="overlay-tile">
          <div className="text-tile">{this.props.props.description}</div>
        </div>
      </div>

    )
  }
}

export default Tile;
