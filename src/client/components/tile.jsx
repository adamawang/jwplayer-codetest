import React, { Component } from 'react';

class Tile extends Component {
  componentDidMount() {
    console.log("props in tile: ", this.props);
  }

  render() {
    const imageStyle = {
      width: '300px',
    }
    return (
      <div className="container-tile">
        <img style={imageStyle} src={`http:${this.props.props.image}`} />
        <div className="overlay-tile">
          <p className="text-tile">{this.props.props.description}</p>
        </div>
      </div>

    )
  }
}

export default Tile;
