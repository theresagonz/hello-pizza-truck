import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"
import ImageGallery from "react-image-gallery"

import truckExteriorRear from "../images/gallery/truck-exterior-rear.png"
import truckExteriorRearThumb from "../images/gallery/truck-exterior-rear-thumb.png"
import truckExteriorFront from "../images/gallery/truck-exterior-front.png"
import truckExteriorFrontThumb from "../images/gallery/truck-exterior-front-thumb.png"
import truckExteriorClose from "../images/gallery/truck-exterior-close.jpg"
import truckExteriorCloseThumb from "../images/gallery/truck-exterior-close-thumb.png"
import ovenFire from "../images/gallery/oven-fire.jpg"
import ovenFireThumb from "../images/gallery/oven-fire-thumb.png"
import ovenCookspace from "../images/gallery/oven-cookspace.jpg"
import ovenCookspaceThumb from "../images/gallery/oven-cookspace-thumb.png"
import ovenPizzas from "../images/gallery/oven-pizzas.png"
import ovenPizzasThumb from "../images/gallery/oven-pizzas-thumb.png"

function LandingPage() {
  const { pageDataYaml } = useStaticQuery(graphql`
    {
      pageDataYaml {
        welcomeText
        landingText
      }
    }
  `)

  const { welcomeText, landingText } = pageDataYaml

  const pageStyle = {
    color: "white",
    backgroundColor: "#00000059",
  }

  const welcomeStyle = {
    letterSpacing: "0.25em",
  }

  // const welcomePicStyle = {
  //   width: "80%",
  //   height: "auto",
  //   "z-index": "1",
  //   "-webkit-box-shadow": "0px 0px 45px 0px rgba(0,0,0,0.33)",
  //   "-moz-box-shadow": "0px 0px 45px 0px rgba(0,0,0,0.33)",
  //   "box-shadow": "0px 0px 45px 0px rgba(0,0,0,0.33)",
  // }

  const pizzaRed = {
    color: "#993333",
  }

  const yellow = {
    color: "#ff9933",
  }

  const elementsToShow = document.querySelectorAll(".feature")

  const images = [
    { original: truckExteriorRear, thumbnail: truckExteriorRearThumb },
    { original: truckExteriorFront, thumbnail: truckExteriorFrontThumb },
    { original: truckExteriorClose, thumbnail: truckExteriorCloseThumb },
    { original: ovenFire, thumbnail: ovenFireThumb },
    { original: ovenCookspace, thumbnail: ovenCookspaceThumb },
    { original: ovenPizzas, thumbnail: ovenPizzasThumb },
  ]

  return (
    <div id="home" style={pageStyle} className="container-fluid">
      <div className="container">
        {/* <Navbar /> */}
        <div className="centerItems">
          <div className="topText">
            <div>
              <h4 style={welcomeStyle} style={pizzaRed}>{welcomeText}</h4>
              <h1>
                <span>{landingText}</span>
              </h1>
            </div>
          </div>
          <ImageGallery items={images} slideInterval={2500} slideDuration={750}></ImageGallery>
          {/* <button
            style={{
              width: "200px",
              padding: "10px",
              border: "none",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              background: "#FFA800",
              borderRadius: "30px",
              textTransform: "uppercase",
              color : "white",
              fontWeight : "600",
              marginTop : "20px"
            }}
          >
            Start a Project
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
