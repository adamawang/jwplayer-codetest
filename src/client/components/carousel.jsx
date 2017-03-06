import React, { Component } from 'react';
import Slider from 'react-slick';
import Tile from './tile';

class Carousel extends Component {
  componentDidMount() {
    console.log("props in carousel: ", this.props);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
    }
    const carousel = {
      marginTop: '20px'
    }
    return (
      <div style={carousel}>
        <Slider {...settings}>
          {this.props.props.map((video) => {
            return (
              <div>
                <Tile props={video} />
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default Carousel;
