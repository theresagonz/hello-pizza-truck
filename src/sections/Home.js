import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Fade from "react-reveal/Fade"
import Navbar from "../components/Navbar"
import { useStaticQuery, graphql, Link } from "gatsby"
import truckExteriorRear from "../images/gallery/main/truck-exterior-rear.png"
// import truckExteriorRearThumb from "../images/gallery/main/truck-exterior-rear-thumb.png"
// import truckExteriorFront from "../images/gallery/main/truck-exterior-front.png"
// import truckExteriorFrontThumb from "../images/gallery/main/truck-exterior-front-thumb.png"
// import truckExteriorClose from "../images/gallery/main/truck-exterior-close.jpg"
// import truckExteriorCloseThumb from "../images/gallery/main/truck-exterior-close-thumb.png"
// import ovenFire from "../images/gallery/kitchen/oven-fire.jpg"
// import ovenFireThumb from "../images/gallery/kitchen/oven-fire-thumb.png"
// import ovenCookspace from "../images/gallery/kitchen/oven-cookspace.jpg"
// import ovenCookspaceThumb from "../images/gallery/kitchen/oven-cookspace-thumb.png"
// import ovenPizzas from "../images/gallery/kitchen/oven-pizzas.png"
// import ovenPizzasThumb from "../images/gallery/kitchen/oven-pizzas-thumb.png"

function Home() {
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

  // const images = [
  //   { original: truckExteriorRear, thumbnail: truckExteriorRearThumb },
  //   { original: truckExteriorFront, thumbnail: truckExteriorFrontThumb },
  //   { original: truckExteriorClose, thumbnail: truckExteriorCloseThumb },
  //   { original: ovenFire, thumbnail: ovenFireThumb },
  //   { original: ovenCookspace, thumbnail: ovenCookspaceThumb },
  //   { original: ovenPizzas, thumbnail: ovenPizzasThumb },
  //   // { original: video,  isVideo: true }
  // ]

  return (
    <div id="home" className="section">
      <div className="top-content row">
        <div className="left-container col-sm-12 col-md-5 col-lg-4">
          <div>
            <div>
              <div className="welcome-text">{welcomeText + " "}</div>
              {/* </h4> */}
              <h1
                className="main-head"
                style={{ fontSize: "var(--large-heading-size)" }}
              >
                <span>{landingText}</span>
              </h1>
            </div>
            <div className="small-image">
              <img
                className="intro-image a-shadow"
                src={truckExteriorRear}
                alt="truck"
              />
            </div>
            <div
              className="city"
              style={{
                fontSize: "22px",
                fontWeight: "300",
                margin: "1.8em 0",
              }}
            >
              <b>Grand Junction, Colorado</b>
            </div>
            <div className="welcome-text">
              Custom-built pizza truck with a wood fired oven, full commercial
              kitchen, spacious work area, and onboard bathroom
            </div>
            <div className="welcome-text">
              Options to include prep, cooking, and vending equipment, a second
              unit trailer, and business extras
            </div>
          </div>
          <AnchorLink className="nav-link" href="#info">
            LEARN MORE...
          </AnchorLink>
        </div>
        <Fade>
          <div className="large-image right-container col-sm-12 col-md-7 col-lg-8">
            <img
              className="intro-image a-shadow"
              src={truckExteriorRear}
              alt="truck"
            />
          </div>
        </Fade>
      </div>
      <div className="down-arrow subsection-nav-links">
        <AnchorLink className="nav-link" href="#info">
          <i className="fa fa-chevron-down" />
        </AnchorLink>
      </div>
    </div>
  )
}

export default Home
