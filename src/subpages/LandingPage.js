import React from "react"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"
import ImageGallery from "react-image-gallery"

import truckExteriorRear from "../images/gallery/main/truck-exterior-rear.png"
import truckExteriorRearThumb from "../images/gallery/main/truck-exterior-rear-thumb.png"
import truckExteriorFront from "../images/gallery/main/truck-exterior-front.png"
import truckExteriorFrontThumb from "../images/gallery/main/truck-exterior-front-thumb.png"
import truckExteriorClose from "../images/gallery/main/truck-exterior-close.jpg"
import truckExteriorCloseThumb from "../images/gallery/main/truck-exterior-close-thumb.png"
import ovenFire from "../images/gallery/kitchen/oven-fire.jpg"
import ovenFireThumb from "../images/gallery/kitchen/oven-fire-thumb.png"
import ovenCookspace from "../images/gallery/kitchen/oven-cookspace.jpg"
import ovenCookspaceThumb from "../images/gallery/kitchen/oven-cookspace-thumb.png"
import ovenPizzas from "../images/gallery/kitchen/oven-pizzas.png"
import ovenPizzasThumb from "../images/gallery/kitchen/oven-pizzas-thumb.png"

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

  const welcomeStyle = {
    letterSpacing: "0.25em",
  }

  const pizzaRed = {
    color: "#993333",
  }

  const yellow = {
    color: "#ff9933",
  }

  const video = (
    <div
      className="video"
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://www.youtube.com/watch?v=aEi7s-bU6Ig`}
        frameBorder="0"
      />
    </div>
  )

  const images = [
    { original: truckExteriorRear, thumbnail: truckExteriorRearThumb },
    { original: truckExteriorFront, thumbnail: truckExteriorFrontThumb },
    { original: truckExteriorClose, thumbnail: truckExteriorCloseThumb },
    { original: ovenFire, thumbnail: ovenFireThumb },
    { original: ovenCookspace, thumbnail: ovenCookspaceThumb },
    { original: ovenPizzas, thumbnail: ovenPizzasThumb },
    // { original: video,  isVideo: true }
  ]

  return (
    <div id="home" className="container-fluid grey-bg">
      <div className="container topTextContainer floatingTextContainer">
        {/* <Navbar /> */}
        <div className="topText textShadow">
          <div>
            <h4 style={welcomeStyle} className="landing-head red-text">
              <span>{welcomeText + " "}</span>
              <span className="landing-subhead">
                <a
                  href="https://www.google.com/maps/place/Grand+Junction,+CO/@39.0856078,-108.7102648,11z/data=!3m1!4b1!4m5!3m4!1s0x8746d6e322e77057:0xcc63f451cebf7c56!8m2!3d39.0638705!4d-108.5506486"
                  target="_blank"
                >
                  <p>Grand Junction, Colorado</p>
                </a>
              </span>
            </h4>
            <h1 className="main-head">
              <span>{landingText}</span>
            </h1>
          </div>
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

      {/* <div className="leftTextContainer floatingTextContainer">
        <h4>Check It Out</h4>
        <divd>&darr; Kitchen</divd>
        <div>&darr; Utility Room</div>
        <div>&darr; Electrical</div>f
        <div>&darr; Truck</div>
        <div>&darr; Construction</div>
      </div> */}

      <div className="landing-img">
        <img src={truckExteriorRear} alt="truck" />
      </div>
      <div className="bottomTextContainer floatingTextContainer">
        <div className="bottomText textShadow">
          Custom-built pizza truck with a real wood fired oven, full commercial
          kitchen, and onboard bathroom, featuring a large working space with
          lots of windows
        </div>
      </div>
    </div>
  )
}

export default LandingPage
