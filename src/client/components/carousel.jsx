import React, { Component } from 'react';
import Slider from 'react-slick';
import Tile from './tile';
import { NextArrow, PrevArrow } from './nav-buttons';

class Carousel extends Component {
  render() {
    // React-Slick settings for carousel
    const settings = {
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        { breakpoint: 750, settings: { slidesToShow: 1 } },
        { breakpoint: 1150, settings: { slidesToShow: 2 } },
        { breakpoint: 1500, settings: { slidesToShow: 3 } },
        { breakpoint: 1700, settings: { slidesToShow: 4 } },
      ],
    }
    return (
      <div className="carousel">
        <div className="carousel-title">
          {this.props.title}
        </div>
        <Slider {...settings}>
          {this.props.props.map((video, i) => {
            return (
              <div>
                <Tile key={i} props={video} />
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default Carousel;
