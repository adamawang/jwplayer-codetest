import React, { Component } from 'react';
import Slider from 'react-slick';


class Jumbo extends Component {
  componentDidUpdate() {
    console.log("props in jumbo: ", this.props);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    const carousel = {
      marginTop: '20px'
    }
    const jumboImage = {
      width: '500px'
    }
    return (
      <div style={carousel}>
        <Slider {...settings}>
          {this.props.props.map((video) => {
            return (
              <div>
                <img style={jumboImage} src={`http:${video.image}`} />
                <p>{video.title}</p>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default Jumbo;
