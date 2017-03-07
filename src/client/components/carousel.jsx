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
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        { breakpoint: 668, settings: { slidesToShow: 1 } },
        { breakpoint: 968, settings: { slidesToShow: 2 } },
        { breakpoint: 1224, settings: { slidesToShow: 3 } },
      ],
    }
    const carousel = {
      marginTop: '20px',
    }
    return (
      <div style={carousel}>
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
