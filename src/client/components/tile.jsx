import React, { Component } from 'react';


class Tile extends Component {
  componentDidMount() {
    // console.log("props in tile: ", this.props);
  }

  toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
    let dropdown = document.getElementById("myDropdown").classList
    console.log("clicked: ", dropdown);
  }

  render() {
    return (
      <div className="container-tile">
        <div className="image-div">
          <img className="image-tile" src={`http:${this.props.props.image}`} alt="video cover photo"/>
          <button className="tile-button" onClick={() => this.toggleMenu()} />
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

// dropdown Code

// <div className="dropdown">
//   <div id="myDropdown" className="dropdown-content">
//     <a href="#home">Home</a>
//     <a href="#about">About</a>
//     <a href="#contact">Contact</a>
//   </div>
// </div>
