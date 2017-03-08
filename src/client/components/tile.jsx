import React, { Component } from 'react';


class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dropdownClass: 'noshow',
    }
  }

  toggleMenu() {
    if(!this.state.open) {
      this.setState({
        open: true,
        dropdownClass: 'dropdown-content'
      })
    } else {
      this.setState({
        open: false,
        dropdownClass: 'noshow'
      })
    }
  }

  render() {
    return (
      <div className="container-tile">
        <div className="image-div">
          <img
            className="image-tile"
            src={`http:${this.props.props.image}`}
            alt="video cover photo"
          />
          <button
            className="tile-button"
            onClick={() => this.toggleMenu()}
          >
            <div className="dropdown">
              <div className={this.state.dropdownClass}>
                <a href="#">Details</a>
                <a href="#">Save Video</a>
                <a onClick={() => this.toggleMenu()}>Cancel</a>
              </div>
            </div>
          </button>
          <div className="text-title">
            {this.props.props.title}
          </div>
        </div>
        <div className="overlay-tile">
          <div className="text-tile">
            {this.props.props.description}
          </div>
        </div>
      </div>
    )
  }
}

export default Tile;
