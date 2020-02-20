import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql, Link } from "gatsby"
import truckExteriorRear from "../images/truck-exterior-rear-sm.jpg"

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

  const style = {
    backgroundImage: "truckExteriorRear",
    backgroundRepeat: "no-repeat",
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

  return (
    <div id="home" className="section" style={style}>
      <div className="top-content row remove-bootstrap-container-padding">
        <div className="welcome-top col-12" style={{ textAlign: "center" }}>
          <div className="welcome-text">{welcomeText + " "}</div>
          <h1
            className="main-head"
            style={{ fontSize: "var(--large-heading-size)" }}
          >
            <span>{landingText}</span>
          </h1>
        </div>
        <div className="left-container remove-bootstrap-container-padding col-sm-12 col-md-5 col-lg-4">
          <div>
            <div className="welcome-left">
              <div className="welcome-text">{welcomeText + " "}</div>
              <h1
                className="main-head"
                style={{ fontSize: "var(--large-heading-size)" }}
              >
                <span>{landingText}</span>
              </h1>
            </div>
            <div
              className="city"
              style={{
                fontSize: "22px",
                fontWeight: "300",
                margin: "var(--large) 0",
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
          <div
            className="large-image right-container col-sm-12 col-md-7 col-lg-8"
            style={{ textAlign: "center" }}
          >
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
