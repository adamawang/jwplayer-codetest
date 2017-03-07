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
          <p className="text-title">{this.props.props.title}</p>
        </div>
        <div className="overlay-tile">
          <p className="text-tile">{this.props.props.description}</p>
        </div>
      </div>

    )
  }
}

export default Tile;
