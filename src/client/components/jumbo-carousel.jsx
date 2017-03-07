import React, { Component } from 'react';
import Slider from 'react-slick';


class Jumbo extends Component {
  componentDidUpdate() {
    // console.log("props in jumbo: ", this.props);
  }

  render() {
    const settings = {
      dots: true,
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        { breakpoint: 968, settings: { slidesToShow: 1 } },
        { breakpoint: 1524, settings: { slidesToShow: 2 } },
      ],
    }

    const jumboImage = {
      width: '500px'
    }
    return (
      <div>
        <Slider {...settings}>
          {this.props.props.map((video) => {
            return (
              <div className="container">
                <img style={jumboImage} src={`http:${video.image}`} />
                <div className="overlay">
                  <p className="text">{video.title}</p>
                  <p className="text">{video.description}</p>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default Jumbo;
