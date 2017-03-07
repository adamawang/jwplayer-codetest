import React, { Component } from 'react';

class JumboTile extends Component {
  componentDidMount() {
    // console.log("props in tile: ", this.props);
  }

  render() {
    return (
      <div className="container">
        <img className="jumbo-image" src={`http:${this.props.props.image}`} />
        <div className="overlay-jumbo">
          <div className="text-jumbo"><h2>{this.props.props.title}</h2></div>
          <div className="text-jumbo">{this.props.props.description}</div>
        </div>
      </div>

    )
  }
}

export default JumboTile;
