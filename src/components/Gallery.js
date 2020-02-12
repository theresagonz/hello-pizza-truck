import React, { Component } from "react"
import Slider from "react-slick"
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.images = props.images
    this.settings = {
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      accessibility: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
          },
        },
      ],
    }
  }

  render() {
    return (
      <div className="gallery">
        <Slider {...this.settings}>
          {this.images.map((image, key) => (
            <div key={key}>
              <img className="slider-image" src={image.original} />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export default Gallery
