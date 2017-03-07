import React, { Component } from 'react';
import Slider from 'react-slick';
import Tile from './tile';

class Carousel extends Component {
  componentDidMount() {
    console.log("props in carousel: ", this.props);
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        { breakpoint: 668, settings: { slidesToShow: 1 } },
        { breakpoint: 968, settings: { slidesToShow: 2 } },
        { breakpoint: 1224, settings: { slidesToShow: 3 } },
        { breakpoint: 1700, settings: { slidesToShow: 4 } },
      ],
    }
    return (
      <div className="carousel">
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
