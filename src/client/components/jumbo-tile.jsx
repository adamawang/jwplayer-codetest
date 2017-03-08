import React, { Component } from 'react';

class JumboTile extends Component {
  render() {
    return (
      <div className="jumbo-container">
        <img
          className="jumbo-image"
          src={`http:${this.props.props.image}`}
          alt="video cover photo"
        />
        <div className="overlay-jumbo">
          <div className="text-jumbo-title">
            <h1>
              {this.props.props.title}
            </h1>
          </div>
          <div className="text-jumbo">
            {this.props.props.description}
          </div>
        </div>
      </div>
    )
  }
}

export default JumboTile;
