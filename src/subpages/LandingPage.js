import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Fade from 'react-reveal/Fade';
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
    <div id="home" className="">
      <div className="container">
        <div className="top-content row">
          <div className="left-container col-lg-4">
            <div>
              <div>
                <div className="welcome-text">{welcomeText + " "}</div>
                {/* </h4> */}
                <h1 className="main-head text-shadow">
                  <span>{landingText}</span>
                </h1>
              </div>
              <div className="city">
                <b>Grand Junction, Colorado</b>
              </div>
              <div className="welcome-text">
                Custom-built pizza truck with a wood fired oven, full commercial
                kitchen, spacious workspace, and onboard bathroom
              </div>
            </div>
            <AnchorLink class="nav-link" href="#team">
              Learn more...
            </AnchorLink>
            {/* <div className="learn-more-container">
            <div className="section-link">Learn more</div>
            <div className="subsection-link">
              <a href="#kitchen">Kitchen</a>
            </div>
            <div className="subsection-link">
              <a href="#bathroom">Bathroom + Utility Room</a>
            </div>
            <div className="subsection-link">
              <a href="#truck">Truck</a>
            </div>
            <div className="subsection-link">
              <a href="#electrical">Electrical</a>
            </div>
            <div className="subsection-link">
              <a href="#plumbing">Plumbing</a>
            </div>
            <div className="subsection-link">
              <a href="#construction">Construction</a>
            </div>
            <div className="section-link">
              <a href="#details">Pricing</a>
            </div>
          </div> */}
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
          <Fade>
          <div className="right-container col-lg-8">
            <img
              class="intro-image a-shadow"
              src={truckExteriorRear}
              alt="truck"
            />
          </div>
          </Fade>
        </div>
      </div>
      <AnchorLink class="nav-link" href="#team">
        <div className="down-arrow">
          <i className="fa fa-chevron-down" />
        </div>
      </AnchorLink>
    </div>
  )
}

export default LandingPage
