import React, { Component } from 'react';
import Slider from 'react-slick';
import JumboTile from './jumbo-tile';
import { NextArrow, PrevArrow } from './nav-buttons';



class Jumbo extends Component {
  componentDidUpdate() {
    // console.log("props in jumbo: ", this.props);
  }

  render() {
    const settings = {
      dots: true,
      dotsClass: 'slick-dots slick-thumb dots-style',
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        { breakpoint: 1100, settings: { slidesToShow: 1 } },
        { breakpoint: 1650, settings: { slidesToShow: 2 } },
      ],
    }

    return (
      <div className="jumbo-carousel">
        <Slider {...settings}>
          {this.props.props.map((video, i) => {
            return (
              <div>
                <JumboTile key={i} props={video} />
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default Jumbo;
