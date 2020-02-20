import React, { Component } from "react"
import Slider from "react-slick"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mainNav: null,
      thumbNav: null,
    }

    this.mainSettings = {
      asNavFor: this.state.thumbNav,
      arrows: false,
      dots: this.props.shouldShowDots,
      arrows: this.props.shouldShowDots,
      ref: slider => (this.mainSlider = slider),
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {   
            arrows: true,
          },
        },
      ],
    }
    const numSlides = Math.min(props.images.length, 7)
    this.thumbSettings = {
      asNavFor: this.state.mainNav,
      ref: slider => (this.thumbSlider = slider),
      slidesToShow: numSlides,
      slidesToScroll: 1,
      initialSlide: 0,
      focusOnSelect: true,
      variableWidth: true,
    }
  }

  componentDidMount() {
    this.setState({
      mainNav: this.mainSlider,
      thumbNav: this.thumbSlider,
    })
    this.thumbSettings.asNavFor = this.mainSlider
    this.mainSettings.asNavFor = this.thumbSlider
  }

  render() {
    const { images, shouldShowDots } = this.props
    return (
      <div className="gallery">
        {images.length > 0 && (
          <div>
            <Slider {...this.mainSettings} className="main-carousel">
              {images.map((image, key) => (
                <div key={"main-" + key} {...this.props}>
                  <img className="slider-image" src={image.original} />
                </div>
              ))}
            </Slider>
            {images.length > 1 && !shouldShowDots && (
              <Slider {...this.thumbSettings} className="thumb-carousel">
                {images.map((image, key) => (
                  <div key={"thumb-" + key} {...this.props}>
                    <img className="slider-image" src={image.original} />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default Gallery
